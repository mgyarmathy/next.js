import * as path from 'path'
import { nextTestSetup } from 'e2e-utils'

describe('app-dir - server source maps', () => {
  const { skipped, next, isNextDev } = nextTestSetup({
    files: path.join(__dirname, 'fixtures/default'),
  })

  if (skipped) return

  it('logged errors have a sourcemapped stack with a codeframe', async () => {
    // TODO: Write test once we run with `--enable-source-maps` when `experimental.serverSourceMaps` is set
  })

  it('logged errors have a sourcemapped `cause`', async () => {
    // TODO: Write test once we run with `--enable-source-maps` when `experimental.serverSourceMaps` is set
  })

  it('logged errors preserve their name', async () => {
    await next.render('/rsc-error-log-custom-name')

    expect(next.cliOutput).toContain(
      isNextDev ? 'UnnamedError: Foo' : '[Error]: Foo'
    )
    expect(next.cliOutput).toContain(
      isNextDev ? 'NamedError [MyError]: Bar' : '[MyError]: Bar'
    )
  })
})
