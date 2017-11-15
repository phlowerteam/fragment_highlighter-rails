const I18j = {
  highlighted_fragments: {
    uk: 'Нотатки',
    ru: 'Нотатки',
    en: 'Notes'
  },
  remove: {
    uk: 'Видалити',
    ru: 'Удалить',
    en: 'Remove'
  },
  turn_off_hmode: {
    uk: 'Відключити',
    ru: 'Отключить',
    en: 'Turn off'
  },
  turn_on_hmode: {
    uk: '"Нотатки"',
    ru: '"Нотатки"',
    en: '"Highlighting"'
  },
  turn_on_reading_hmode: {
    uk: '"Читання"',
    ru: '"Чтение"',
    en: '"Reading" mode'
  },
  import_settings: {
    uk: 'Імпортувати',
    ru: 'Импортировать',
    en: 'Import settings'
  },
  export_settings: {
    uk: 'Експорт',
    ru: 'Экспорт',
    en: 'Export settings'
  },
  import: {
    not_supported_api: {
      uk: "Підтримка файлів поки що не підтримується в цьому браузері.",
      ru: "Поддержка файлов пока что не поддерживается в этом браузере.",
      en: "The file API isn't supported on this browser yet."
    },
    not_find: {
      uk: "Нажаль не знайдено файлового елементу.",
      ru: "К сожалению не найдено файлового элемента.",
      en: "Um, couldn't find the fileinput element."
    },
    not_supported_files: {
      uk: "Цей браузер здається не підтримує елементи.",
      ru: "Этот браузер похоже не поддерживает элементы 'files'.",
      en: "This browser doesn't seem to support the 'files' property of file inputs."
    },
    please_select: {
      uk: "Будь-ласка оберіть файл перед завантаженням.",
      ru: "Пожалуйста выберете файл перед загрузкой.",
      en: "Please select a file before clicking 'Load'."
    }
  }
}

class I18 {

  static tr(translation) {
    return translation[I18.locale()];
  }

  static locale() {
    let currentLocale = window.location.href.split('/')[3];
    if (currentLocale == 'uk' || currentLocale == 'ru') {
      return  currentLocale;
    } else {
      return 'en';
    }
  }
}
