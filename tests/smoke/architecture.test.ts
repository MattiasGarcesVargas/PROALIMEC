import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'

const sourceRoot = join(process.cwd(), 'src')
const sectionsRoot = join(sourceRoot, 'sections')

function listSourceFiles(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name)
    if (entry.isDirectory()) return listSourceFiles(path)
    return /\.(ts|tsx)$/.test(entry.name) ? [path] : []
  })
}

describe('vertical slice boundaries', () => {
  it('keeps mock imports out of components', () => {
    const componentFiles = readdirSync(sectionsRoot, {
      withFileTypes: true,
    }).flatMap((section) =>
      listSourceFiles(join(sectionsRoot, section.name, 'components')),
    )

    for (const file of componentFiles) {
      expect(readFileSync(file, 'utf8')).not.toMatch(/\/mocks\//)
    }
  })

  it('prevents one section from importing another section internals', () => {
    const sections = readdirSync(sectionsRoot, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)

    for (const section of sections) {
      const files = listSourceFiles(join(sectionsRoot, section))
      const otherSections = sections.filter(
        (candidate) => candidate !== section,
      )

      for (const file of files) {
        const source = readFileSync(file, 'utf8')
        for (const otherSection of otherSections) {
          expect(source).not.toContain(`~/sections/${otherSection}/`)
        }
      }
    }
  })

  it('keeps shared independent from business sections', () => {
    const sharedFiles = listSourceFiles(join(sourceRoot, 'shared'))

    for (const file of sharedFiles) {
      expect(readFileSync(file, 'utf8')).not.toMatch(/~\/sections\//)
    }
  })
})
