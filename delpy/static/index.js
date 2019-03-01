var BLOCKLY_COMMIT = 'f86b2dac';
var ACORN_COMMIT = 'e113e87a';

requirejs.config({
  paths: {
    'blockly': 'https://cdn.rawgit.com/google/blockly/' + BLOCKLY_COMMIT + '/blockly_compressed',
    'blockly/blocks': 'https://cdn.rawgit.com/google/blockly/' + BLOCKLY_COMMIT + '/blocks_compressed',
    'blockly/code/python': 'https://cdn.rawgit.com/google/blockly/' + BLOCKLY_COMMIT + '/python_compressed',
    'blockly/code/javascript': 'https://cdn.rawgit.com/google/blockly/' + BLOCKLY_COMMIT + '/javascript_compressed',

    'blockly/msg': 'https://cdn.rawgit.com/google/blockly/' + BLOCKLY_COMMIT + '/msg/js/en',
    'blockly/code/msg': 'https://cdn.rawgit.com/google/blockly/' + BLOCKLY_COMMIT + '/demos/code/msg/en',

    'acorn_interpreter': 'https://cdn.rawgit.com/NeilFraser/JS-Interpreter/' + ACORN_COMMIT + '/acorn_interpreter',

    'highlightjs': '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min'
  },
  shim: {
    'blockly': {
      exports: 'Blockly'
    },
    'blockly/blocks': {
      deps: ['blockly']
    },
    'blockly/code/python': {
      deps: ['blockly']
    },
    'blockly/code/javascript': {
      deps: ['blockly']
    },
    'blockly/msg': {
      deps: ['blockly']
    },
    'blockly/code/msg': {
      exports: 'MSG',
      deps: ['blockly']
    },

    'highlightjs': {
      exports: 'hljs'
    },
  }
});

define(function(require) {
  var delpy_blockly = require('./delpy_blockly');
  var lang = require('./lang');
  require('blockly/msg');
  require('blockly/code/msg');

  function load_translation(lang_key) {
    if(lang.name[lang_key] === undefined)
      lang_key = "en";

    requirejs.undef('blockly/msg');
    requirejs.undef('blockly/code/msg');
    requirejs.config({
      paths: {
        'blockly/msg': 'https://cdn.rawgit.com/google/blockly/' + BLOCKLY_COMMIT + '/msg/js/' + lang_key,
        'blockly/code/msg': 'https://cdn.rawgit.com/google/blockly/' + BLOCKLY_COMMIT + '/demos/code/msg/' + lang_key,
      }
    });

    require(['blockly', 'blockly/code/msg', 'blockly/msg'], function(Blockly, CodeMsg) {
      // Add additional translations
      for(var msg_key in CodeMsg) {
        Blockly.Msg[msg_key.toUpperCase()] = CodeMsg[msg_key];
      }
	  Blockly.Msg["CONTROLS_REPEAT_INPUT_DO"] = "";
	  Blockly.Msg["CONTROLS_IF_MSG_THEN"] = "";
	  if (lang_key == "pt-br") {
  		Blockly.Msg["CATMATH"] = "Números";
  		Blockly.Msg["CATTEXT"] = "Textos";
  		Blockly.Msg["CATFUNCTIONS"] = "Procedimentos";
		Blockly.Msg["CONTROLS_FOR_TITLE"] = "para %1 de %2 até %3 com passo %4";
		Blockly.Msg["CONTROLS_WHILEUNTIL_OPERATOR_UNTIL"] = "repita até que";
		Blockly.Msg["CONTROLS_WHILEUNTIL_OPERATOR_WHILE"] = "repita enquanto";
		Blockly.Msg["LISTS_CREATE_EMPTY_TITLE"] = "crie uma lista vazia";
		Blockly.Msg["LISTS_CREATE_WITH_INPUT_WITH"] = "crie uma lista com";
		Blockly.Msg["LISTS_GET_INDEX_GET"] = "obtenha o elemento da posição";
		Blockly.Msg["LISTS_GET_INDEX_GET_REMOVE"] = "obtenha e remova o elemento da posição";
		Blockly.Msg["LISTS_GET_INDEX_FIRST"] = "primeira";
		Blockly.Msg["LISTS_GET_INDEX_FROM_END"] = "nº (contando do fim)";
		Blockly.Msg["LISTS_GET_INDEX_FROM_START"] = "nº (contando do início)";
		Blockly.Msg["LISTS_GET_INDEX_INPUT_IN_LIST"] = "da lista";
		Blockly.Msg["LISTS_GET_INDEX_LAST"] = "última";
		Blockly.Msg["LISTS_GET_INDEX_RANDOM"] = "aleatória";
		Blockly.Msg["LISTS_GET_INDEX_REMOVE"] = "remova o elemento da posição";
		Blockly.Msg["LISTS_SET_INDEX_INPUT_TO"] = "o valor";
		Blockly.Msg["LISTS_SET_INDEX_INSERT"] = "insira na posição";
		Blockly.Msg["LISTS_SET_INDEX_SET"] = "associe à posição";
		Blockly.Msg["LISTS_SORT_ORDER_ASCENDING"] = "crescente";
		Blockly.Msg["LISTS_SORT_ORDER_DESCENDING"] = "decrescente";
		Blockly.Msg["LISTS_SORT_TITLE"] = "copie em ordem %1 %2 a lista %3";
		Blockly.Msg["LISTS_SORT_TYPE_IGNORECASE"] = "alfabética (ignorando maiúsculas/minúsculas)";
		Blockly.Msg["LISTS_SORT_TYPE_NUMERIC"] = "numérica";
		Blockly.Msg["LISTS_SORT_TYPE_TEXT"] = "alfabética (considerando maiúsculas/minúsculas)";
		Blockly.Msg["LISTS_SPLIT_LIST_FROM_TEXT"] = "faça uma lista a partir do texto";
		Blockly.Msg["LISTS_SPLIT_TEXT_FROM_LIST"] = "faça um texto a partir da lista";
		Blockly.Msg["LISTS_SPLIT_WITH_DELIMITER"] = "usando como delimitador";
		Blockly.Msg["LISTS_REPEAT_TITLE"] = "crie uma lista com %2 repetições do item %1";
		Blockly.Msg["LOGIC_OPERATION_AND"] = "e";
		Blockly.Msg["LOGIC_OPERATION_OR"] = "ou";
		Blockly.Msg["LOGIC_BOOLEAN_FALSE"] = "falso";
		Blockly.Msg["LOGIC_BOOLEAN_TRUE"] = "verdadeiro";
		Blockly.Msg["CONTROLS_IF_DO"] = "";
		Blockly.Msg["MATH_ONLIST_OPERATOR_SUM"] = "somatório da lista";
		Blockly.Msg["MATH_RANDOM_FLOAT_TITLE_RANDOM"] = "número aleatório entre 0.0 e 1.0";
		Blockly.Msg["MATH_ROUND_OPERATOR_ROUND"] = "arredonde";
		Blockly.Msg["MATH_ROUND_OPERATOR_ROUNDDOWN"] = "arredonde para baixo";
		Blockly.Msg["MATH_ROUND_OPERATOR_ROUNDUP"] = "arredonde para cima";		
		Blockly.Msg["TEXT_JOIN_TITLE_CREATEWITH"] = "crie um texto unindo";
		Blockly.Msg["TEXT_APPEND_TITLE"] = "acrescente %2 a %1";
		Blockly.Msg["TEXT_INDEXOF_OPERATOR_FIRST"] = "encontre a primeira ocorrência de";
		Blockly.Msg["TEXT_INDEXOF_OPERATOR_LAST"] = "encontre a última ocorrência de";
		Blockly.Msg["TEXT_INDEXOF_TITLE"] = "%2 %3 em %1";
		Blockly.Msg["TEXT_GET_SUBSTRING_END_FROM_END"] = "até a letra nº (contando do final)";
		Blockly.Msg["TEXT_GET_SUBSTRING_END_FROM_START"] = "até a letra nº (contando do início)";
		Blockly.Msg["TEXT_GET_SUBSTRING_END_LAST"] = "até a última letra";
		Blockly.Msg["TEXT_GET_SUBSTRING_INPUT_IN_TEXT"] = "obter trecho de";
		Blockly.Msg["TEXT_GET_SUBSTRING_START_FIRST"] = "da primeira letra";
		Blockly.Msg["TEXT_GET_SUBSTRING_START_FROM_END"] = "da letra nº (contando do final)";
		Blockly.Msg["TEXT_GET_SUBSTRING_START_FROM_START"] = "da letra nº (contando do início)";
		Blockly.Msg["TEXT_CHANGECASE_OPERATOR_LOWERCASE"] = "copie em letras minúsculas";
		Blockly.Msg["TEXT_CHANGECASE_OPERATOR_TITLECASE"] = "copie como Nomes Próprios";
		Blockly.Msg["TEXT_CHANGECASE_OPERATOR_UPPERCASE"] = "copie em letras MAIÚSCULAS";
		Blockly.Msg["TEXT_PRINT_TITLE"] = "imprima %1";
		Blockly.Msg["TEXT_PROMPT_TYPE_NUMBER"] = "Peça um número com a mensagem";
		Blockly.Msg["TEXT_PROMPT_TYPE_TEXT"] = "Peça um texto com a mensagem";
		Blockly.Msg["VARIABLES_SET"] = "associar %1 a %2";
		Blockly.Msg["MATH_CHANGE_TITLE"] = "alterar %1 acrescentando %2";
		Blockly.Msg["PROCEDURES_BEFORE_PARAMS"] = "entradas:";
		Blockly.Msg["PROCEDURES_CALLNORETURN_TOOLTIP"] = "Executa o procedimento definido pelo usuário \"%1\".";
		Blockly.Msg["PROCEDURES_CALLRETURN_TOOLTIP"] = "Executa o procedimento definido pelo usuário \"%1\" e usa seu retorno.";
		Blockly.Msg["PROCEDURES_CALL_BEFORE_PARAMS"] = "entradas:";
		Blockly.Msg["PROCEDURES_DEFNORETURN_PROCEDURE"] = "nome";
		Blockly.Msg["PROCEDURES_DEFNORETURN_TITLE"] = "procedimento";
		Blockly.Msg["PROCEDURES_DEFRETURN_RETURN"] = "retorne";
		Blockly.Msg["PROCEDURES_DEFRETURN_TOOLTIP"] = "Cria um procedimento que retorna um valor.";
		Blockly.Msg["PROCEDURES_DEF_DUPLICATE_WARNING"] = "Atenção: Esta função tem entradas de mesmo nome.";
		Blockly.Msg["PROCEDURES_IFRETURN_WARNING"] = "Atenção: Este bloco só pode ser utilizado dentro da definição de um procedimento.";
		Blockly.Msg["PROCEDURES_MUTATORARG_TOOLTIP"] = "Adiciona uma entrada para este procedimento";
		Blockly.Msg["PROCEDURES_MUTATORCONTAINER_TOOLTIP"] = "Adiciona, remove, ou reordena as entradas para este procedimento.";
		Blockly.Msg["PROCEDURES_DEFRETURN_TITLE"] = Blockly.Msg["PROCEDURES_DEFNORETURN_TITLE"];
		Blockly.Msg["PROCEDURES_DEFRETURN_PROCEDURE"] = Blockly.Msg["PROCEDURES_DEFNORETURN_PROCEDURE"];
	  }
      delpy_blockly.inject_blockly(true);
    });
  }

  function init_menu() {
    // Add a widgets menubar item, before help.
    var langMenu = $('<li/>').addClass('dropdown')
      .insertBefore($('#help_menu').closest('li.dropdown'))
      .append($('<a href="#"/>').attr('data-toggle', 'dropdown').addClass('dropdown-toggle')
        .text('Blockly Language'));

    var langSubMenu = $('<ul id="lang-submenu">').addClass('dropdown-menu').appendTo(langMenu);

    for(var name in lang.name) {
      langSubMenu.append(
        $('<li/>').append($('<a href="#"/>').text(lang.name[name])
          .click((function(key) {
            return function() {
              load_translation(key);
            }
          })(name))));
    }
  }

  function load_ipython_extension() {
    load_translation(navigator.language);
    init_menu();
  }

  return {
    load_ipython_extension: load_ipython_extension,
    inject_blockly: delpy_blockly.inject_blockly
  };
});
