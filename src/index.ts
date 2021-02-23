import { moduleInterop } from '@textlint/module-interop'

module.exports = {
  rules: {
    'ja-no-mixed-period': moduleInterop(require('textlint-rule-ja-no-mixed-period')),
    prh: moduleInterop(require('textlint-rule-prh')),
  },
  rulesConfig: {
    'ja-no-mixed-period': true,
    prh: {
      rulePaths: ['node_modules/textlint-rule-preset-smarthr/dict/prh-rules.yml'],
    },
  },
}
