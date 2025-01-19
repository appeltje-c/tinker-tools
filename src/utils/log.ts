export enum TweakErrors {
  UNSUPPORTED_INPUT,
  NO_COMPONENT_FOR_TYPE,
  UNKNOWN_INPUT,
  DUPLICATE_KEYS,
  ALREADY_REGISTERED_TYPE,
  CLIPBOARD_ERROR,
  THEME_ERROR,
  PATH_DOESNT_EXIST,
  INPUT_TYPE_OVERRIDE,
  EMPTY_KEY,
}

const ErrorList = {
  [TweakErrors.UNSUPPORTED_INPUT]: (type: string, path: string) => [
    `An input with type \`${type}\` input was found at path \`${path}\` but it's not supported yet.`,
  ],
  [TweakErrors.NO_COMPONENT_FOR_TYPE]: (type: string, path: string) => [
    `Type \`${type}\` found at path \`${path}\` can't be displayed in panel because no component supports it yet.`,
  ],
  [TweakErrors.UNKNOWN_INPUT]: (path: string, value: unknown) => [`input at path \`${path}\` is not recognized.`, value],
  [TweakErrors.DUPLICATE_KEYS]: (key: string, path: string, prevPath: string) => [
    `Key \`${key}\` of path \`${path}\` already exists at path \`${prevPath}\`. Even nested keys need to be unique. Rename one of the keys.`,
  ],
  [TweakErrors.ALREADY_REGISTERED_TYPE]: (type: string) => [
    `Type ${type} has already been registered. You can't register a component with the same type.`,
  ],
  [TweakErrors.CLIPBOARD_ERROR]: (value: unknown) => [`Error copying the value`, value],
  [TweakErrors.THEME_ERROR]: (category: string, key: string) => [
    `Error accessing the theme \`${category}.${key}\` value.`,
  ],
  [TweakErrors.PATH_DOESNT_EXIST]: (path: string) => [
    `Error getting the value at path \`${path}\`. There is probably an error in your \`render\` function.`,
  ],
  [TweakErrors.INPUT_TYPE_OVERRIDE]: (path: string, type: string, wrongType: string) => [
    `Input at path \`${path}\` already exists with type: \`${type}\`. Its type cannot be overridden with type \`${wrongType}\`.`,
  ],
  [TweakErrors.EMPTY_KEY]: () => ['Keys can not be empty, if you want to hide a label use whitespace.'],
}