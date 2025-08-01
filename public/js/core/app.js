"use strict";

$(document).ready(function () {

  /**--------------------------------------------------------------------------------------
   * [SESSION MESSAGES]
   * @blade : layout/automationjs.blade.php
   * @description: show session set noty messages
   * -------------------------------------------------------------------------------------*/
  if ($("#js-trigger-session-message").length) {
    var session_message = $("#js-trigger-session-message").attr('data-message');
    var message_type = $("#js-trigger-session-message").attr('data-type');

    //show error messages for longer
    if (message_type == 'success') {
      var duration = 3000;
    } else {
      var duration = 8000;
    }

    NX.notification({
      'type': message_type,
      'duration': duration,
      'message': session_message,
    });
  }

  /**--------------------------------------------------------------------------------------
   * [FORCE PASSWORD CHANGE]
   * @blade : layout/automationjs.blade.php
   * @description: force password change for new users
   * -------------------------------------------------------------------------------------*/
  if ($("#js-trigger-force-password-change").length) {
    //close any open modals
    $('.modal').modal('hide');
    //show password reset popup
    $("#js-trigger-force-password-change").trigger('click');
  }

  /**--------------------------------------------------------------------------------------
   * [ADMIN UPDATES - RUN ONCE]
   * @blade : layout/automationjs.blade.php
   * @description: force password change for new users
   * -------------------------------------------------------------------------------------*/
  if ($("#js-trigger-update-action").length) {
    //close any open modals
    $('.modal').modal('hide');
    //show password reset popup
    $("#js-trigger-update-action").trigger('click');
  }



  /**--------------------------------------------------------------------------------------
   * [LOAD DYNAMIC CONTENT]
   * @blade : layout/automationjs.blade.php
   * @description: force password change for new users
   * -------------------------------------------------------------------------------------*/
  if ($("#js-trigger-dynamic-modal").length) {
    var trigger_id = $("#js-trigger-dynamic-modal").attr('data-payload');
    //show password reset popup
    $(trigger_id).trigger('click');
  }



  /**--------------------------------------------------------------------------------------
   * [POLLING - GENERAL]
   * @blade : layout/foo.blade.php
   * @description: polling timers
   * -------------------------------------------------------------------------------------*/
  if ($("#js-trigger-general-polling").length) {
    function nxTimerPolling() {
      nxAjaxUxRequest($("#js-trigger-general-polling"));
      setTimeout(nxTimerPolling, 15000);
    };
    nxTimerPolling();
  }



  /**--------------------------------------------------------------------------------------
   * [POLLING - TIMERS]
   * @blade : layout/foo.blade.php
   * @description: polling genereal
   * -------------------------------------------------------------------------------------*/
  if ($("#js-trigger-general-timers").length) {
    function nxGeneralPolling() {
      nxAjaxUxRequest($("#js-trigger-general-timers"));
      setTimeout(nxGeneralPolling, 15000);
    };
    nxGeneralPolling();
  }


  /**--------------------------------------------------------------------------------------
   * [POLLING - TOP NAV TIMER]
   * @blade : layout/foo.blade.php
   * @description: polling genereal
   * -------------------------------------------------------------------------------------*/
  if ($("#js-trigger-topnav-timer").length) {
    function nxGeneralPolling() {
      nxAjaxUxRequest($("#js-trigger-topnav-timer"));
      setTimeout(nxGeneralPolling, 15000);
    };
    nxGeneralPolling();
  }



  /**--------------------------------------------------------------------------------------
   * [SESSION MESSAGES]
   * @blade : layout/automationjs.blade.php
   * @description: show session set noty messages
   * -------------------------------------------------------------------------------------*/
  if ($("#js-trigger-session-message").length) {
    var session_message = $("#js-trigger-session-message").attr('data-message');
    var message_type = $("#js-trigger-session-message").attr('data-type');
    NX.notification({
      'type': message_type,
      'duration': 7000,
      'message': session_message,
    });
  }


});




/**--------------------------------------------------------------------------------------
 * [MAIN MENU SCROLL BAR]
 * @description: show scroll bar
 * -------------------------------------------------------------------------------------*/
function nxSettingsLeftMenuScroll() {
  const navLeftScroll = new PerfectScrollbar('#settings-scroll-sidebar', {
    wheelSpeed: 2,
    wheelPropagation: true,
    minScrollbarLength: 20
  });
}
$(document).ready(function () {
  if ($("#settings-scroll-sidebar").length) {
    //add special class to menu items that have submenu
    $(".sidenav-menu-item").has("ul").addClass('has-submenu');

    //special sub menu highlighting for ajax link
    $(".js-submenu-ajax").on('click', function () {
      $(".js-submenu-ajax").removeClass('active');
      $("a.active").removeClass('active');
      $(this).addClass('active');
    });
    //autoscroll menu
    nxSettingsLeftMenuScroll();
  }
});


/**--------------------------------------------------------------------------------------
 * [CATEGORIES]
 * @page : settings/categories
 * @description: javascript for the categories section (in settings)
 * -------------------------------------------------------------------------------------*/
function NXBootCategories() {

  if ($("#categories-table-wrapper").length) {

    //variables
    var page_section = $("#categories-table-wrapper").attr('data-payload');


    //activate left menu, specifically for ticket departments
    if (page_section == 'ticket') {
      var current_state = $("#settings-menu-tickets").attr('aria-expanded');
      if (current_state == 'false') {
        $("#settings-menu-tickets").trigger('click');
        $("#settings-menu-tickets-departments").addClass('active');
      }
      //exit
      return;
    }
  }

  //[client]
  if (page_section == 'client') {
    if ($("#settings-menu-clients").attr('aria-expanded') == 'false') {
      $("#settings-menu-clients").trigger('click');
      $("#settings-menu-categories-client").addClass('active');
    }
  }


  //[project]
  if (page_section == 'project') {
    if ($("#settings-menu-projects").attr('aria-expanded') == 'false') {
      $("#settings-menu-projects").trigger('click');
      $("#settings-menu-categories-project").addClass('active');
    }
  }


  //[lead]
  if (page_section == 'lead') {
    if ($("#settings-menu-leads").attr('aria-expanded') == 'false') {
      $("#settings-menu-leads").trigger('click');
      $("#settings-menu-categories-lead").addClass('active');
    }
  }

  //[invoice]
  if (page_section == 'invoice') {
    if ($("#settings-menu-invoices").attr('aria-expanded') == 'false') {
      $("#settings-menu-invoices").trigger('click');
      $("#settings-menu-categories-invoice").addClass('active');
    }
  }

  //[estimate]
  if (page_section == 'estimate') {
    if ($("#settings-menu-estimates").attr('aria-expanded') == 'false') {
      $("#settings-menu-estimates").trigger('click');
      $("#settings-menu-categories-estimate").addClass('active');
    }
  }


  //[item]
  if (page_section == 'item') {
    if ($("#settings-menu-items").attr('aria-expanded') == 'false') {
      $("#settings-menu-items").trigger('click');
      $("#settings-menu-categories-item").addClass('active');
    }
  }


  //[expense]
  if (page_section == 'expense') {
    if ($("#settings-menu-expenses").attr('aria-expanded') == 'false') {
      $("#settings-menu-expenses").trigger('click');
      $("#settings-menu-categories-expense").addClass('active');
    }
  }

}



/**--------------------------------------------------------------------------------------
 * [CATEGORIES - CREATE AND EDIT]
 * @description: form validation
 * -------------------------------------------------------------------------------------*/
function NXCategoriesCreate() {
  //add category - form validation
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      category_name: "required"
    },
    submitHandler: function (form) {
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });

}

/**--------------------------------------------------------------------------------------
 * [CARDS - BOOT JAVASCRIPT FOR ALL ACTIONS ON THE CARD
 * @blade : task\modal.blade.php
 * @description: all he jsactionson cards
 * -------------------------------------------------------------------------------------*/
function NXBootCards() {

  //comments
  if ($("#cardModal").length) {

    //focus on the editor
    $(document).on('click', '#card-coment-placeholder-input', function () {
      tinymce.get('card-comment-tinmyce').setContent('');
      $("#card-coment-placeholder-input-container").hide();
      $("#card-comment-tinmyce-container").show();
      tinymce.execCommand('mceFocus', true, 'card-comment-tinmyce');
    });

    //close editor
    $(document).on('click', '#card-comment-close-button', function () {
      $("#card-comment-tinmyce-container").hide();
      $("#card-coment-placeholder-input-container").show();
    });
    //post comment
    $(document).off('click', '#card-comment-post-button').on('click', '#card-comment-post-button', function (e) {
      $("#card-comment-tinmyce-container").hide();
      $("#card-coment-placeholder-input-container").show();
      nxAjaxUxRequest($(this));
    });
  }

  //EDIT DESCRIPTION   
  if ($("#cardModal").length) {
    NX.card_description = $("#card-description-container");
    NX.card_descrition_selector = '#card-description-container';
    NX.card_description_submit = $("#card-description-submit");
    NX.card_description_edit = $("#card-description-edit");
    NX.card_description_input = $("#card-description-input");

    //edit button clicked
    $(document).on('click', '#card-description-button-edit', function () {
      tinymce.remove("#card-description-container");
      NX.card_description_original_text = NX.card_description.html();
      NX.card_description_height = NX.card_description.outerHeight();
      NX.card_description.addClass('card-tinymce-textarea');
      NX.card_description_edit.hide();
      NX.card_description_submit.show();
      nxTinyMCEBasic(NX.card_description_height, NX.card_descrition_selector);
    });
    //cancel button clicked
    $(document).on('click', '#card-description-button-cancel', function () {
      NX.card_description.removeClass('card-tinymce-textarea');
      NX.card_description_submit.hide();
      NX.card_description_edit.show();
      tinymce.remove("#card-description-container");
      NX.card_description.html(NX.card_description_original_text);
    });
    $(document).off('click', '.js-description-save').on('click', '.js-description-save', function () {
      NX.card_description_input.val(NX.card_description.html());
      NX.card_description.removeClass('card-tinymce-textarea');
      NX.card_description_submit.hide();
      NX.card_description_edit.show();
      tinymce.remove("#card-description-container");
      $("#card-description-container").html('<div class="loading w-px-150 h-px-30"></div>');
      nxAjaxUxRequest($(this));
    });
  }

  //CARD TITLE
  if ($("#cardModal").length) {
    NX.card_title_edit_original = '';
    //start
    $(document).on('click', '#card-title-editable', function () {
      NX.card_title_edit_original = $(this).html();
      $(this).hide();
      $(".card-title-input").val(NX.card_title_edit_original.trim());
      $("#card-title-edit").show();
    });
    //cancel
    $(document).on('click', '#card-title-button-cancel', function () {
      $("#card-title-editable").html(NX.card_title_edit_original);
      $("#card-title-edit").hide();
      $("#card-title-editable").show();
    });
    //show loading annimation
    $(document).on('click', '#card-title-button-save', function () {
      $("#card-title-editable").html('<div class="loading w-px-150 h-px-30"></div>');
      $("#card-title-edit").hide();
      $("#card-title-editable").show();
      nxAjaxUxRequest($(this));
    });
  }


  /** -------------------------------------------
   * COMMENTS TEXT EDITOR
   *--------------------------------------------*/
  if ($("#cardModal").length) {

    tinymce.execCommand('mceRemoveEditor', true, 'card-comment-tinmyce');
    //initialize
    tinymce.init({
      selector: '#card-comment-tinmyce',
      mode: 'exact',
      theme: "modern",
      skin: 'light',
      branding: false,
      menubar: false,
      statusbar: false,
      forced_root_block: false,
      document_base_url: NX.site_url,
      plugins: [
        "advlist autolink lists link image preview  codesample table hr",
        "paste autoresize"
      ],
      height: 200,
      toolbar: 'bold link bullist numlist alignleft aligncenter alignright image hr table code table fullscreen',
      //autosave/update text area
      setup: function (editor) {
        editor.on('change', function () {
          editor.save();
        });
      },
      //upload images
      images_upload_handler: function (blobInfo, success, failure) {
        var xhr, formData;
        xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        xhr.open('POST', 'upload-tinymce-image');
        xhr.setRequestHeader("X-CSRF-Token", NX.csrf_token);
        xhr.onload = function () {
          var json;
          if (xhr.status != 200) {
            failure('HTTP Error: ' + xhr.status);
            return;
          }
          json = JSON.parse(xhr.responseText);

          if (!json || typeof json.location != 'string') {
            failure('Invalid JSON: ' + xhr.responseText);
            return;
          }
          success(json.location);
        };
        formData = new FormData();
        formData.append('file', blobInfo.blob(), blobInfo.filename());
        xhr.send(formData);
      }
    });
  }



  /** -------------------------------------------
   * OTHER ACTIONS
   *--------------------------------------------*/
  if ($("#cardModal").length) {

    //reset picker
    $('.card-pickadate').datepicker('destroy');

    //default date pickers
    $(document).find(".card-pickadate").datepicker({
      format: NX.date_picker_format,
      language: "lang",
      autoclose: true,
      class: "datepicker-default",
      todayHighlight: false
    });

    //reset date
    //$('.card-pickadate').datepicker('clearDates'); //not needed, plus its causing ajax requests to fire multiple time

    //ajax request
    $('.card-pickadate').on('changeDate', function (e) {
      //update form date
      $("#" + $(this).attr('data-hidden-field')).val(moment(e.date).format('YYYY-MM-DD'));
      //update value
      $("#" + $(this).attr('data-container')).html(moment(e.date).format(NX.date_moment_format));
      //send request
      nxAjaxUxRequest($(this));
    });


    /** -------------------------------------------------------------------------------
     *  Something in the left panel or datepicker or other popover has been clicked
     *  - close any static popover windows
     * ------------------------------------------------------------------------------- */
    $(document).on('click', '#card-left-panel, .js-card-settings-button, .card-pickadate', function () {
      $('.js-card-settings-button-static').popover('hide');
    });

    $(document).on('click', '#card-leads-left-panel, .js-card-settings-button, .card-pickadate', function () {
      $('.js-card-settings-button-static').popover('hide');
    });

    /** ---------------------------------------------------
     *  Right panel settings buttons
     *  - basic actions buttons
     *  - auto close
     * -------------------------------------------------- */
    $(document).find(".js-card-settings-button").each(function () {
      $(this).popover({
        html: true,
        sanitize: false, //The HTML is NOT user generated
        placement: 'bottom',
        offset: '-65,0',
        trigger: 'focus',
        template: NX.basic_popover_template,
        title: $(this).attr('data-title'),
        content: function () {
          //popover elemenet
          return $('#' + $(this).attr('data-popover-content')).html();
        }
      });
    });

    /** ---------------------------------------------------
     *  Right panel settings buttons
     *  - basic actions buttons
     *  - no auto close
     * -------------------------------------------------- */
    $(document).find(".js-card-settings-button-static").each(function () {
      $(this).popover({
        html: true,
        sanitize: false, //The HTML is NOT user generated
        placement: 'bottom',
        offset: '-65,0',
        template: NX.basic_popover_template,
        title: $(this).attr('data-title'),
        content: function () {
          //popover elemenet
          return $('#' + $(this).attr('data-popover-content')).html();
        }
      });
    });


    /** ------------------------------------------------------------------------------
     *  - close any other static popover windows
     * ------------------------------------------------------------------------------- */
    $(document).on('click', '.js-card-settings-button-static', function () {
      $('.js-card-settings-button-static').not(this).popover('hide');
    });



    /**-------------------------------------------------------------
     * EDITING TASK STATUS
     * ------------------------------------------------------------*/
    $(document).off('click', '.card-tasks-update-status-link').on('click', '.card-tasks-update-status-link', function () {
      //update the buttons parent popover
      $(this).attr('data-form-id', $(this).closest('.popover').attr('id'));
      //cart display element
      var $card_display_element = $("#card-task-status-text");
      //set current value text
      $(".popover-body").find("#current_task_status_text").val($card_display_element.html());
      //add loading
      $card_display_element.html('---');
      $card_display_element.attr('data-value', '');
      $card_display_element.addClass('loading');
      //set hidden form
      $(this).closest('.popover').find("#task_status").val($(this).attr('data-value'));
      //close static popovers
      $('.js-card-settings-button-static').popover('hide');
      //send request
      nxAjaxUxRequest($(this));
    });


    /**-------------------------------------------------------------
     * EDITING TASK PRIORITy
     * ------------------------------------------------------------*/

    $(document).off('click', '.card-tasks-update-priority-link').on('click', '.card-tasks-update-priority-link', function () {
      //update the buttons parent popover
      $(this).attr('data-form-id', $(this).closest('.popover').attr('id'));
      //cart display element
      var $card_display_element = $("#card-task-priority-text");
      //set current value text
      $(".popover-body").find("#current_task_priority_text").val($card_display_element.html());
      //add loading
      $card_display_element.html('---');
      $card_display_element.attr('data-value', '');
      $card_display_element.addClass('loading');
      //set hidden form
      $(this).closest('.popover').find("#task_priority").val($(this).attr('data-value'));
      //close static popovers
      $('.js-card-settings-button-static').popover('hide');
      //send request
      nxAjaxUxRequest($(this));
    });


    /**-------------------------------------------------------------
     * EDITING TASK VISIBILITY
     * ------------------------------------------------------------*/
    $(document).off('click', '.card-tasks-update-visibility-link').on('click', '.card-tasks-update-visibility-link', function () {
      //update the buttons parent popover
      $(this).attr('data-form-id', $(this).closest('.popover').attr('id'));
      //cart display element
      var $card_display_element = $("#card-task-client-visibility-text");
      //set current value text
      $(".popover-body").find("#current_task_client_visibility_text").val($card_display_element.html());
      //add loading
      $card_display_element.html('---');
      $card_display_element.attr('data-value', '');
      $card_display_element.addClass('loading');
      //set hidden form
      $(this).closest('.popover').find("#task_client_visibility").val($(this).attr('data-value'));
      $(this).closest('.popover').find("#current_task_client_visibility_text").val($(this).attr('data-text'));
      //close static popovers
      $('.js-card-settings-button-static').popover('hide');
      //send request
      nxAjaxUxRequest($(this));
    });


    /**-------------------------------------------------------------
     * EDITING TASK MILESTONE
     * ------------------------------------------------------------*/
    $(document).off('click', '#card-tasks-update-milestone-button').on('click', '#card-tasks-update-milestone-button', function () {
      //update the buttons parent popover
      $(this).attr('data-form-id', $(this).closest('.popover').attr('id'));
      //get selected text
      var $select = $(".popover-body").find("#task_milestoneid");
      var selected_text = $select.find('option:selected').text();
      $("#card-task-milestone-title").html(selected_text);
      //close static popovers
      $('.js-card-settings-button-static').popover('hide');
      //send request
      nxAjaxUxRequest($(this));
    });


    /**-------------------------------------------------------------
     * EDITING LEAD NAME
     * ------------------------------------------------------------*/
    $(document).off('click', '#card-lead-name').on('click', '#card-lead-name', function () {
      //update names in the form
      $(".popover-body").find("#lead_firstname").val($(document).find("#card-lead-firstname-containter").html());
      $(".popover-body").find("#lead_lastname").val($(document).find("#card-lead-lastname-containter").html());
    });
    $(document).off('click', '#card-leads-update-name-button').on('click', '#card-leads-update-name-button', function () {
      //update the buttons parent popover
      $(this).attr('data-form-id', $(this).closest('.popover').attr('id'));
      //reset current name
      $("#card-lead-firstname-containter").html('');
      $("#card-lead-lastname-containter").html('');
      //add loading
      $("#card-lead-element-container-name").addClass('loading');
      //close static popovers
      $('.js-card-settings-button-static').popover('hide');
      //send request
      nxAjaxUxRequest($(this));
    });

    /**-------------------------------------------------------------
     * EDITING LEAD VALUE
     * ------------------------------------------------------------*/
    $(document).off('click', '#card-lead-value').on('click', '#card-lead-value', function () {
      $(".popover-body").find("#lead_value").val($(this).attr('data-value'));
    });
    $(document).off('click', '#card-leads-update-value-button').on('click', '#card-leads-update-value-button', function () {
      //update the buttons parent popover
      $(this).attr('data-form-id', $(this).closest('.popover').attr('id'));
      //reset data & add loading class
      var $card_display_element = $("#card-lead-value");
      $card_display_element.html('---');
      $card_display_element.attr('data-value', '');
      $card_display_element.addClass('loading');
      //close static popovers
      $('.js-card-settings-button-static').popover('hide');
      //send request
      nxAjaxUxRequest($(this));
    });



    /**-------------------------------------------------------------
     * EDITING LEAD STATUS
     * ------------------------------------------------------------*/
    $(document).off('click', '#card-leads-update-status-button').on('click', '#card-leads-update-status-button', function () {
      //update the buttons parent popover
      $(this).attr('data-form-id', $(this).closest('.popover').attr('id'));
      //reset data & add loading class
      var $card_display_element = $("#card-lead-status-text");
      //current text value
      $(".popover-body").find("#current_lead_status_text").val($card_display_element.html());
      $card_display_element.html('---');
      $card_display_element.attr('data-value', '');
      $card_display_element.addClass('loading');
      //close static popovers
      $('.js-card-settings-button-static').popover('hide');
      //send request
      nxAjaxUxRequest($(this));
    });


    /**-------------------------------------------------------------
     * EDITING LEAD CATEGORY
     * ------------------------------------------------------------*/
    $(document).off('click', '#card-leads-update-category-button').on('click', '#card-leads-update-category-button', function () {
      //update the buttons parent popover
      $(this).attr('data-form-id', $(this).closest('.popover').attr('id'));
      //reset data & add loading class
      var $card_display_element = $("#card-lead-category-text");
      //current text value
      $(".popover-body").find("#current_lead_category_text").val($card_display_element.html());
      $card_display_element.html('---');
      $card_display_element.attr('data-value', '');
      $card_display_element.addClass('loading');
      //close static popovers
      $('.js-card-settings-button-static').popover('hide');
      //send request
      nxAjaxUxRequest($(this));
    });


    /**-------------------------------------------------------------
     * EDITING LEAD PHONE
     * ------------------------------------------------------------*/
    $(document).off('click', '#card-lead-phone').on('click', '#card-lead-phone', function () {
      var current_value = ($(this).html() == '---') ? '' : $(this).html();
      $(".popover-body").find("#lead_phone").val(current_value);
    });
    $(document).off('click', '#card-leads-update-phone-button').on('click', '#card-leads-update-phone-button', function () {
      //update the buttons parent popover
      $(this).attr('data-form-id', $(this).closest('.popover').attr('id'));
      //reset data & add loading class
      var $card_display_element = $("#card-lead-phone");
      $card_display_element.html('---');
      $card_display_element.attr('data-value', '');
      $card_display_element.addClass('loading');
      //close static popovers
      $('.js-card-settings-button-static').popover('hide');
      //send request
      nxAjaxUxRequest($(this));
    });


    /**-------------------------------------------------------------
     * EDITING LEAD EMAIL
     * ------------------------------------------------------------*/
    $(document).off('click', '#card-lead-email').on('click', '#card-lead-email', function () {
      var current_value = ($(this).html() == '---') ? '' : $(this).html();
      $(".popover-body").find("#lead_email").val(current_value);
    });
    $(document).off('click', '#card-leads-update-email-button').on('click', '#card-leads-update-email-button', function () {
      //update the buttons parent popover
      $(this).attr('data-form-id', $(this).closest('.popover').attr('id'));
      //reset data & add loading class
      var $card_display_element = $("#card-lead-email");
      $card_display_element.html('---');
      $card_display_element.attr('data-value', '');
      $card_display_element.addClass('loading');
      //close static popovers
      $('.js-card-settings-button-static').popover('hide');
      //send request
      nxAjaxUxRequest($(this));
    });



    /**-------------------------------------------------------------
     * EDITING LEAD SOURCE
     * ------------------------------------------------------------*/
    $(document).off('click', '#card-leads-update-source-button').on('click', '#card-leads-update-source-button', function () {
      //update the buttons parent popover
      $(this).attr('data-form-id', $(this).closest('.popover').attr('id'));
      //reset data & add loading class
      var $card_display_element = $("#card-lead-source-text");
      $card_display_element.html('---');
      $card_display_element.attr('data-value', '');
      $card_display_element.addClass('loading');
      //close static popovers
      $('.js-card-settings-button-static').popover('hide');
      //send request
      nxAjaxUxRequest($(this));
    });



    /**-------------------------------------------------------------
     * UPDATING ASSIGNED USERS
     * ------------------------------------------------------------*/
    $(document).off('click', '#card-tasks-update-assigned').on('click', '#card-tasks-update-assigned', function () {
      //update the buttons parent popover
      $(this).attr('data-form-id', $(this).closest('.popover').attr('id'));
      //add loading class
      $("#task-assigned-container").html('');
      $("#task-assigned-container").addClass('loading-placeholder');
      //close static popovers
      $('.js-card-settings-button-static').popover('hide');
      //send request
      nxAjaxUxRequest($(this));
    });

    /**-------------------------------------------------------------
     * UPDATING ASSIGNED USERS
     * ------------------------------------------------------------*/
    $(document).off('click', '#card-leads-update-assigned').on('click', '#card-leads-update-assigned', function () {
      //update the buttons parent popover
      $(this).attr('data-form-id', $(this).closest('.popover').attr('id'));
      //add loading class
      $("#lead-assigned-container").html('');
      $("#lead-assigned-container").addClass('loading-placeholder');
      //close static popovers
      $('.js-card-settings-button-static').popover('hide');
      //send request
      nxAjaxUxRequest($(this));
    });


    /**-------------------------------------------------------------
     * FILE UPLOAD TOGGLE
     * ------------------------------------------------------------*/
    $(document).off('click', '#js-card-toggle-fileupload').on('click', '#js-card-toggle-fileupload', function () {

      //reset tags
      var $dropdown = $(".card-attachment-tags");
      $dropdown.val('');
      $dropdown.trigger("change");

      //show form
      $(document).find("#card-fileupload-container").toggle();
    });
  }



  /**-------------------------------------------------------------
   * FILE UPLOAD
   * ------------------------------------------------------------*/
  if ($("#card-attachments").length) {
    //get the url
    var upload_url = $("#card-attachments").attr('data-upload-url');
    //attache the files
    if ($("#card_fileupload").length) {
      $("#card_fileupload").dropzone({
        url: upload_url,
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        init: function () {
          this.on("error", function (file, message, xhr) {
            //is there a message from backend [abort() response]
            if (typeof xhr != 'undefined' && typeof xhr.response != 'undefined') {
              var error = $.parseJSON(xhr.response);
              if (typeof error === 'object' && typeof error.notification != 'undefined') {
                var message = error.notification.value;
              } else {
                var message = NXLANG.generic_error;
              }
            }

            //any other message
            var message = (typeof message == 'undefined' || message == '' ||
              typeof message == 'object') ? NXLANG.generic_error : message;

            //error message
            NX.notification({
              type: 'error',
              message: message
            });
            //remove the file
            this.removeFile(file);
          });

          // Add sending event to include selected tags
          this.on("sending", function (file, xhr, formData) {
            var selectedTags = $("#tags").val(); // Get selected values using Select2
            if (selectedTags != null) {
              selectedTags.forEach(function (tag) {
                formData.append("tags[]", tag); // Append each selected tag to formData
              });
            }
          });

        },
        success: function (file, response) {
          $("#card-fileupload-container").hide();
          //get the priview box dom elemen
          var $preview = $(file.previewElement);
          //add to the list
          $("#card-attachments-container").prepend(response.attachment);
          //remove the file
          this.removeFile(file);
        }
      });
    }
  }



  /**-------------------------------------------------------------
   * POLL TASK TIMER
   * ------------------------------------------------------------*/
  if ($("#cardModal").length) {
    function nxTimerTaskPolling() {
      if ($("#timerTaskPollingTrigger").length) {
        nxAjaxUxRequest($("#timerTaskPollingTrigger"));
      }
      setTimeout(nxTimerTaskPolling, 45000);
    };
    nxTimerTaskPolling();
  }
};


/**--------------------------------------------------------------------------------------
 * [AUTHENTICATON] 
 * @blade : task\modal.blade.php
 * @description: all login, signup, forgot password js
 * -------------------------------------------------------------------------------------*/
function NXAuthentication() {
  /*----------------------------------------------------------------
   * login  - form validation
   *--------------------------------------------------------------*/
  if ($("#reloginForm").length) {
    $("#reloginForm").validate({
      rules: {
        email: {
          required: true,
        },
        password: {
          required: true,
        },
      },
      submitHandler: function (form) {
        nxAjaxUxRequest($("#reloginModalButton"));
      }
    });
  }


  /*----------------------------------------------------------------
   * signup - form validation
   *--------------------------------------------------------------*/
  if ($("#signUpForm").length) {
    $("#signUpForm").validate({
      rules: {
        first_name: "required",
        last_name: "required",
        client_company_name: "required",
        email: "required",
        password: {
          required: true,
          minlength: 6,
        },
        password_confirmation: {
          equalTo: "#password"
        },
      },
      submitHandler: function (form) {
        nxAjaxUxRequest($("#signupButton"));
      }
    });
  }


  /*----------------------------------------------------------------
   * reset password - form validation
   *---------------------------------------------------------------*/
  if ($("#resetPasswordForm").length) {
    $("#resetPasswordForm").validate({
      rules: {
        password: {
          required: true,
          minlength: 6,
        },
        password_confirmation: {
          equalTo: "#password"
        },
      },
      submitHandler: function (form) {
        nxAjaxUxRequest($("#resetPasswordSubminButton"));
      }
    });
  }


  /*----------------------------------------------------------------
   * login - form validation
   *--------------------------------------------------------------*/
  if ($("#loginForm").length) {
    $("#loginForm").validate({
      rules: {
        email: "required",
        password: "required",
      },
      submitHandler: function (form) {
        nxAjaxUxRequest($("#loginSubmitButton"));
      }
    });
  }


  /*----------------------------------------------------------------
   * forgot password -  form validation
   *---------------------------------------------------------------*/
  if ($("#forgotPasswordForm").length) {
    $("#forgotPasswordForm").validate({
      rules: {
        email: "required",
      },
      submitHandler: function (form) {
        nxAjaxUxRequest($("#forgotSubmitButton"));
      }
    });
  }

  /*----------------------------------------------------------------
   * relogin - form validation
   *--------------------------------------------------------------*/
  if ($("#reloginForm").length) {
    $("#reloginForm").validate({
      rules: {
        email: {
          required: true,
        },
        password: {
          required: true,
        },
      },
      submitHandler: function (form) {
        nxAjaxUxRequest($("#reloginModalButton"));
      }
    });
  }
};
NXAuthentication();


/**--------------------------------------------------------------------------------------
 * [COMMENTS] 
 * @blade : comments\wrapper.blade.php
 * @description: show tinymce comment box
 * -------------------------------------------------------------------------------------*/
function NXPostGeneralComment() {

  //variable
  var unique_comment_id = $("#js-trigger-comments").attr('data-payload');

  //remove existing
  tinymce.remove('#editor-' + unique_comment_id);
  //initialize
  tinymce.init({
    selector: '#editor-' + unique_comment_id,
    mode: 'exact',
    theme: "modern",
    skin: 'light',
    branding: false,
    menubar: false,
    statusbar: false,
    autoresize_min_height: 200,
    document_base_url: NX.site_url,
    plugins: [
      "advlist autolink lists paste link image preview code",
      "table paste autoresize imagetools hr",
      "fullscreen spellchecker"
    ],
    height: 200,
    toolbar: 'formatselect undo redo bold | image link | alignleft aligncenter alignright outdent indent bullist numlist | hr table blockquote code fullscreen',
    //autosave/update text area
    setup: function (editor) {
      editor.on('change', function () {
        editor.save();
      });
    },
    //upload images
    images_upload_handler: function (blobInfo, success, failure) {
      var xhr, formData;
      xhr = new XMLHttpRequest();
      xhr.withCredentials = false;
      xhr.open('POST', 'upload-tinymce-image');
      xhr.setRequestHeader("X-CSRF-Token", NX.csrf_token);
      xhr.onload = function () {
        var json;
        if (xhr.status != 200) {
          failure('HTTP Error: ' + xhr.status);
          return;
        }
        json = JSON.parse(xhr.responseText);

        if (!json || typeof json.location != 'string') {
          failure('Invalid JSON: ' + xhr.responseText);
          return;
        }
        success(json.location);
      };
      formData = new FormData();
      formData.append('file', blobInfo.blob(), blobInfo.filename());
      xhr.send(formData);
    }
  });
  //focus on the editor
  $(document).on('click', '#placeholder-container-' + unique_comment_id, function () {
    tinymce.get('editor-' + unique_comment_id).setContent('');
    tinymce.execCommand('mceFocus', true, 'editor-' + unique_comment_id);
  });
}


/**--------------------------------------------------------------------------------------
 * [COMMENTS] 
 * @blade : contacts\mdals\add-edit.blade.php
 * @description: validation for the add contact form
 * -------------------------------------------------------------------------------------*/
function NXContacts() {
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      first_name: "required",
      last_name: "required",
      email: "required",
      clientid: "required"
    },
    submitHandler: function (form) {
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}


/**--------------------------------------------------------------------------------------
 * [ESTIMATE] 
 * @blade : estimates\components\modals\add-edit-inc.blade.php
 * @description: validation for add/edit estimates form
 * -------------------------------------------------------------------------------------*/
function NXEstimates() {
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      bill_date_add_edit: "required",
      bill_clientid: "required",
      bill_status: "required",
      bill_categoryid: "required",
    },
    submitHandler: function (form) {
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}

/**--------------------------------------------------------------------------------------
 * [EXPENSES] 
 * @blade : expenses\components\modals\add-edit-inc.blade.php
 * @description: validation for add/edit expenses form
 * -------------------------------------------------------------------------------------*/
function NXEstimates() {
  //variable
  var expense_modal_trigger_clients_project_list = $("#js-trigger-expenses").attr('data-payload');
  var expense_client_id = $("#js-trigger-expenses").attr('data-client-id');


  //file upload
  $("#fileupload_expense_receipt").dropzone({
    url: "/fileupload",
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },
    init: function () {
      this.on("error", function (file, message, xhr) {

        //is there a message from backend [abort() response]
        if (typeof xhr != 'undefined' && typeof xhr.response != 'undefined') {
          var error = $.parseJSON(xhr.response);
          var message = error.notification.value;
        }

        //any other message
        var message = (typeof message == 'undefined' || message == '' ||
          typeof message == 'object') ? NXLANG.generic_error : message;

        //error message
        NX.notification({
          type: 'error',
          message: message
        });
        //remove the file
        this.removeFile(file);
      });
    },
    success: function (file, response) {
      //get the priview box dom elemen
      var $preview = $(file.previewElement);
      //create a hidden form field for this file
      $preview.append('<input type="hidden" name="attachments[' + response.uniqueid +
        ']"  value="' + response.filename + '">');
    }
  });


  //validation
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      expense_description: "required",
      expense_date: "required",
      expense_amount: "required",
      expense_categoryid: "required"
    },
    submitHandler: function (form) {
      //ajax form, so initiate ajax request here
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });



  //create expense
  if (expense_modal_trigger_clients_project_list == 'show') {
    //client select element
    var $dropdown = $("#expense_clientid");

    //selected client
    var client_id = expense_client_id;

    // Construct my data to select
    var data = {
      "id": client_id
    };

    // Set the value
    $dropdown.val(client_id);

    // Change the select2 control to update it visually
    $dropdown.trigger("change");

    // Manually fire the event with my data
    $dropdown.trigger({
      type: 'select2:select',
      params: {
        data: data
      }
    });
  }
}

/**--------------------------------------------------------------------------------------
 * [CLIENT - UPLOAD LOGO]
 * @blade : clients\components\modals\update-logo.blade.php
 * @description: logo uploading inside client dashboard
 * -------------------------------------------------------------------------------------*/
function NXClientUploadLogo() {

  if ($("#js-trigger-clients-modal-upload-logo").length) {

    var client_id = $("#js-trigger-clients-modal-upload-logo").attr('data-payload');

    //upload client logo
    $("#fileupload_single_image").dropzone({
      url: "/uploadlogo",
      headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      },
      maxFiles: 1,
      maxFilesize: 2, // MB
      acceptedFiles: 'image/jpeg, image/png',
      thumbnailWidth: null,
      thumbnailHeight: null,
      init: function () {
        this.on("error", function (file, message, xhr) {

          //is there a message from backend [abort() response]
          if (typeof xhr != 'undefined' && typeof xhr.response != 'undefined') {
            var error = $.parseJSON(xhr.response);
            var message = error.notification.value;
          }

          //any other message
          var message = (typeof message == 'undefined' || message == '' ||
            typeof message == 'object') ? NXLANG.generic_error : message;

          //error message
          NX.notification({
            type: 'error',
            message: message
          });
          //remove the file
          this.removeFile(file);
        });
      },
      success: function (file, response) {
        //get the priview box dom elemen
        var $preview = $(file.previewElement);
        //create a hidden form field for this file
        $preview.append('<input type="hidden" name="logo_filename"  value="' + response
          .filename + '">');
        $preview.append('<input type="hidden" name="logo_directory"  value="' + response
          .uniqueid + '">');
        $preview.append('<input type="hidden" name="client_id"  value="' + client_id +
          '">');
      }
    });

    $("#commonModalForm").validate().destroy();
    $("#commonModalForm").validate({
      rules: {},
      submitHandler: function (form) {
        nxAjaxUxRequest($("#commonModalSubmitButton"));
      }
    });
  }
}


/**--------------------------------------------------------------------------------------
 * [FILES] 
 * @blade : files\components\modals\add-edit-inc.blade.php
 * @description: validation for add/edit expenses form
 * -------------------------------------------------------------------------------------*/
function NXFiles() {

  //uplaod files
  $("#fileupload_files").dropzone({
    url: "/fileupload",
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },
    init: function () {
      this.on("error", function (file, message, xhr) {

        //is there a message from backend [abort() response]
        if (typeof xhr != 'undefined' && typeof xhr.response != 'undefined') {
          var error = $.parseJSON(xhr.response);
          if (typeof error === 'object' && typeof error.notification != 'undefined') {
            var message = error.notification.value;
          } else {
            var message = NXLANG.generic_error;
          }
        }

        //system generated errors (e.g. apache)
        if (typeof xhr != 'undefined' && typeof xhr.statusText != 'undefined') {
          //file too large (php.ini settings)
          if (xhr.statusText == 'Payload Too Large') {
            var message = NXLANG.file_too_big;
          }
        }

        //any other message
        var message = (typeof message == 'undefined' || message == '' ||
          typeof message == 'object') ? NXLANG.generic_error : message;

        //error message
        NX.notification({
          type: 'error',
          message: message
        });
        //remove the file
        this.removeFile(file);
      });
    },
    success: function (file, response) {
      //get the priview box dom elemen
      var $preview = $(file.previewElement);
      //create a hidden form field for this file
      $preview.append('<input type="hidden" name="attachments[' + response.uniqueid +
        ']"  value="' + response.filename + '">');
    }
  });



  //validation
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {},
    submitHandler: function (form) {
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}


/**--------------------------------------------------------------------------------------
 * [HOME PAGE - ADMIN] 
 * @blade : home\admin\wrapper.blade.php
 * @description: display dashboard widgets
 * -------------------------------------------------------------------------------------*/
function NXHomeAdmin() {

  //projects list scroll
  if ($("#dashboard-admin-events").length) {
    const ps = new PerfectScrollbar('#dashboard-admin-events', {
      wheelSpeed: 2,
      wheelPropagation: true,
      minScrollbarLength: 20
    });
  }

  //leads chart
  if ($("#leadsWidget").length) {
    var chart = c3.generate({
      bindto: '#leadsWidget',
      data: {
        columns: NX.admin_home_c3_leads_data,
        type: 'donut',
        onclick: function (d, i) { },
        onmouseover: function (d, i) { },
        onmouseout: function (d, i) { }
      },
      donut: {
        label: {
          show: false
        },
        title: NX.admin_home_c3_leads_title,
        width: 20,

      },

      legend: {
        hide: true
      },
      color: {
        pattern: NX.admin_home_c3_leads_colors
      }
    });
  }



  //income vs expenses

  if ($("#admin-dhasboard-income-vs-expenses").length) {
    var chart = new Chartist.Line('.incomeexpenses', {
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      series: [
        NX.admin_home_chart_income,
        NX.admin_home_chart_expenses
      ]
    }, {
      lineSmooth: Chartist.Interpolation.simple({
        divisor: 2
      }),
      showArea: true,
      low: 0,
      fullWidth: true,
      plugins: [
        Chartist.plugins.tooltip()
      ],
    });

    chart.on('draw', function (ctx) {
      if (ctx.type === 'point') {
        // Adding custom attribute to point elements to store value
        ctx.element.attr({
          'ct:value': ctx.value.y
        });
      }
    });

    chart.on('created', function (ctx) {
      var defs = ctx.svg.elem('defs');
      defs.elem('linearGradient', {
        id: 'gradient',
        x1: 0,
        y1: 1,
        x2: 0,
        y2: 0
      }).elem('stop', {
        offset: 0,
        'stop-color': 'rgba(255, 255, 255, 1)'
      }).parent().elem('stop', {
        offset: 1,
        'stop-color': 'rgba(36, 210, 181, 1)'
      });

      // Customizing tooltip position
      $('.ct-point').on('mouseenter', function () {
        var $tooltip = $('.chartist-tooltip');
        var $point = $(this);

        // Check if tooltip and point exist
        if ($tooltip.length && $point.length) {
          var chartOffset = $('.ct-chart').offset();
          var x = $point.attr('cx');
          var y = $point.attr('cy');
          var value = $point.attr('ct:value');

          $tooltip.css({
            left: chartOffset.left + parseInt(x) + 'px',
            top: chartOffset.top + parseInt(y) + 'px'
          }).html('Value: ' + value).show();
        }
      });

      $('.ct-point').on('mouseleave', function () {
        $('.chartist-tooltip').hide();
      });
    });

    var chart = [chart];
  }

  //tickets chart
  if ($("#ticketsWidget").length) {
    var chart = c3.generate({
      bindto: '#ticketsWidget',
      data: {
        columns: NX.admin_home_c3_tickets_data,
        type: 'donut',
        onclick: function (d, i) { },
        onmouseover: function (d, i) { },
        onmouseout: function (d, i) { }
      },
      donut: {
        label: {
          show: false
        },
        title: NX.admin_home_c3_tickets_title,
        width: 20,
      },
      legend: {
        hide: true
      },
      color: {
        pattern: NX.admin_home_c3_tickets_colors
      }
    });
  }

}
if ($("#js-trigger-home-admin-wrapper").length) {
  NXHomeAdmin();
}


/**--------------------------------------------------------------------------------------
 * [HOME PAGE - TEAM] 
 * @blade : home\team\wrapper.blade.php
 * @description: display dashboard widgets
 * -------------------------------------------------------------------------------------*/
function NXHomeTeam() {
  //perfect scroll
  if ($("#dashboard-client-projects").length) {
    const ps2 = new PerfectScrollbar('#dashboard-client-projects', {
      wheelSpeed: 2,
      wheelPropagation: true,
      minScrollbarLength: 20
    });
  }


  //perfect scroll
  if ($("#dashboard-client-events").length) {
    const ps = new PerfectScrollbar('#dashboard-client-events', {
      wheelSpeed: 2,
      wheelPropagation: true,
      minScrollbarLength: 20
    });
  }
}
if ($("#js-trigger-home-team-wrapper").length) {
  NXHomeTeam();
}


/**--------------------------------------------------------------------------------------
 * [HOME PAGE - CLIENT] 
 * @blade : home\team\wrapper.blade.php
 * @description: display dashboard widgets
 * -------------------------------------------------------------------------------------*/
function NXHomeTeam() {
  //perfect scroll
  if ($("#dashboard-client-projects").length) {
    const ps2 = new PerfectScrollbar('#dashboard-client-projects', {
      wheelSpeed: 2,
      wheelPropagation: true,
      minScrollbarLength: 20
    });
  }


  //perfect scroll
  if ($("#dashboard-client-events").length) {
    const ps = new PerfectScrollbar('#dashboard-client-events', {
      wheelSpeed: 2,
      wheelPropagation: true,
      minScrollbarLength: 20
    });
  }
}
if ($("#js-trigger-home-team-wrapper").length) {
  NXHomeTeam();
}



/**--------------------------------------------------------------------------------------
 * [HOME PAGE - CLIENT] 
 * @blade : home\client\wrapper.blade.php
 * @description: display dashboard widgets
 * -------------------------------------------------------------------------------------*/
function NXHomeClient() {
  //perfect scroll
  if ($("#dashboard-client-projects").length) {
    const ps2 = new PerfectScrollbar('#dashboard-client-projects', {
      wheelSpeed: 2,
      wheelPropagation: true,
      minScrollbarLength: 20
    });
  }


  //perfect scroll
  if ($("#dashboard-client-events").length) {
    const ps = new PerfectScrollbar('#dashboard-client-events', {
      wheelSpeed: 2,
      wheelPropagation: true,
      minScrollbarLength: 20
    });
  }
}
if ($("#js-trigger-home-team-wrapper").length) {
  NXHomeClient();
}



/**--------------------------------------------------------------------------------------
 * [INVOICE - CLONE] 
 * @blade : invoices\components\modals\clone.blade.php
 * @description: validation for cloning an invoice
 * -------------------------------------------------------------------------------------*/
function NXInvoiceClone() {
  //validation
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      bill_clientid: "required",
      bill_due_date: "required",
      bill_categoryid: "required",
      bill_date: "required",
    },
    submitHandler: function (form) {
      //ajax form, so initiate ajax request here
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}

/**--------------------------------------------------------------------------------------
 * [ESTIMATE - CLONE] 
 * @blade : estimates\components\modals\clone.blade.php
 * @description: validation for cloning an invoice
 * -------------------------------------------------------------------------------------*/
function NXEstimateClone() {
  //validation
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      bill_clientid: "required",
      bill_categoryid: "required",
      bill_date: "required",
    },
    submitHandler: function (form) {
      //ajax form, so initiate ajax request here
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}


/**--------------------------------------------------------------------------------------
 * [INVOICE - RECURRING] 
 * @blade : invoices\components\modals\recurring-settings.blade.php
 * @description: validation for recurring an invoice
 * -------------------------------------------------------------------------------------*/
function NXInvoiceRecurring() {
  //validation
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      bill_recurring_next: "required",
      bill_recurring_duration: "required",
      bill_recurring_period: "required",
      bill_recurring_cycles: "required",
    },
    submitHandler: function (form) {
      //ajax form, so initiate ajax request here
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}


/**--------------------------------------------------------------------------------------
 * [INVOICE - ADD] 
 * @blade : invoices\components\modals\add-edit-inc.blade.php
 * @description: validation for creating an invoice
 * -------------------------------------------------------------------------------------*/
function NXInvoiceCreate() {
  //validation
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      bill_due_date_add_edit: "required",
      bill_categoryid: "required",
      bill_date_add_edit: "required",
    },
    submitHandler: function (form) {
      //ajax form, so initiate ajax request here
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}


/**--------------------------------------------------------------------------------------
 * [ITEMS - ADD - EDIT] 
 * @blade : items\components\modals\add-edit-inc.blade.php
 * @description: validation for creating a product
 * -------------------------------------------------------------------------------------*/
function NXItemCreate() {
  //validation
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      item_description: "required",
      item_categoryid: "required",
      item_unit: "required",
      item_rate: "required",
      item_dimensions_length: {
        required: function (element) {
          return ($("#item_type").val() == 'dimensions') ? true : false;
        }
      },
      item_dimensions_width: {
        required: function (element) {
          return ($("#item_type").val() == 'dimensions') ? true : false;
        }
      },
    },
    submitHandler: function (form) {

      //ajax form, so initiate ajax request here
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}



/**--------------------------------------------------------------------------------------
 * [KB ARTICLE - CREATE] 
 * @description: validation for creating an article
 * -------------------------------------------------------------------------------------*/
function NXArticleCreate() {
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      knowledgebase_title: "required",
    },
    submitHandler: function (form) {
      //ajax form, so initiate ajax request here
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });

  //select category type
  $(document).off("select2:select", "#knowledgebase_categoryid").on("select2:select", "#knowledgebase_categoryid", function (e) {

    //hide all
    $("#article-text-editor-container").hide();
    $("#article-embed-code-container").hide();


    var selected_type = $(this).find(':selected').attr('data-category-type');

    if (selected_type == 'text') {
      $("#article-text-editor-container").show();
    }

    if (selected_type == 'video') {
      $("#article-embed-code-container").show();
    }

  });

  //we are editong existing article


}


/**--------------------------------------------------------------------------------------
 * [LEADS - CONVERT] 
 * @description: validation for converting a lead
 * -------------------------------------------------------------------------------------*/
function NXLeadConvert() {
  $("#convertLeadForm").validate({
    rules: {
      first_name: 'required',
      last_name: 'required',
      client_company_name: 'required',
      email: 'required'
    },
    submitHandler: function (form) {
      //ajax form, so initiate ajax request here
      nxAjaxUxRequest($("#createCustomerButton"));
    }
  });
}

/**--------------------------------------------------------------------------------------
 * [LEADS - CREATE] 
 * @description: validation for creating a lead
 * -------------------------------------------------------------------------------------*/
function NXLeadCreate() {

  //clean up lead value field - strip symbols and none numric
  $(document).on('click', '#commonModalSubmitButton', function () {
    if ($('#lead_value').length) {
      var lead_value = $("#lead_value").val();
      $("#lead_value").val(lead_value.replace(/[^0-9.]/g, ""));
    }
  });

  //validation
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      lead_title: "required",
      lead_firstname: "required",
      lead_lastname: "required"
    },
    submitHandler: function (form) {
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}


/**--------------------------------------------------------------------------------------
 * [LEADS - KANBAN] 
 * @description: bootstrap the kanban board
 * -------------------------------------------------------------------------------------*/
function NXLeadsKanban() {

  if ($(".js-trigger-leads-kanban-board").length) {

    //variable
    var lead_position = $("#leads-view-wrapper").attr('data-position');

    //dga and drop
    var cardsDraggable = dragula({
      isContainer: function (el) {
        return el.classList.contains('kanban-content');
      }
    }).on('drag', function (card) {
      // add 'is-moving' class to element being dragged
      card.classList.add('is-moving');
    })
      .on('dragend', function (card) {
        // remove 'is-moving' class from element after dragging has stopped
        card.classList.remove('is-moving');
        // add the 'is-moved' class for 600ms then remove it
        window.setTimeout(function () {
          card.classList.add('is-moved');
          window.setTimeout(function () {
            card.classList.remove('is-moved');
          }, 600);
        }, 100);

        //this card id
        var this_lead_id = $(card).attr('data-lead-id');

        //previous card's lead  id
        var previous_list = $(card).prevAll()
        var previous_lead_id = '';
        previous_list.each(function () {
          if ($(this).hasClass('kanban-card')) {
            previous_lead_id = $(this).attr('data-lead-id');
            return false;
          }
        });

        //next card's lead id
        var next_lead_id = $(card).next('.kanban-card').attr('data-lead-id');
        if (typeof next_lead_id == 'undefined') {
          next_lead_id = '';
        }

        //board
        var board_name = $(card).parent('.kanban-content').attr('data-board-name');

        //ajax update request
        var update_position = $.ajax({
          headers: {

            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          },
          type: 'post',
          url: lead_position,
          dataType: 'json',
          data: 'lead_id=' + this_lead_id + '&previous_lead_id=' + previous_lead_id +
            '&next_lead_id=' + next_lead_id + '&status=' + board_name,
        });
      });
  }
}
if ($(".js-trigger-leads-kanban-board").length) {
  NXLeadsKanban();
}


/**--------------------------------------------------------------------------------------
 * [LEADS - CREATE] 
 * @description: validation for creating a lead
 * -------------------------------------------------------------------------------------*/
function NXTaskCreate() {

  //task type selector
  $(".task_type_selector").on('click', function () {
    $("#task_type").val($(this).val());
  });

  //validation
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      task_title: "required",
      task_projectid: "required",
      task_priority: "required",
    },
    submitHandler: function (form) {
      //ajax form, so initiate ajax request here
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}


/**--------------------------------------------------------------------------------------
 * [LEADS - KANBAN] 
 * @description: bootstrap the kanban board
 * -------------------------------------------------------------------------------------*/
function NXTasksKanban() {

  if ($("#js-tasks-kanban-wrapper").length) {

    //position
    var task_position = $("#js-tasks-kanban-wrapper").attr('data-position');

    //gragable
    var cardsDraggable = dragula({
      isContainer: function (el) {
        return el.classList.contains('kanban-content');
      }
    }).on('drag', function (card) {
      // add 'is-moving' class to element being dragged
      card.classList.add('is-moving');
    })
      .on('dragend', function (card) {
        // remove 'is-moving' class from element after dragging has stopped
        card.classList.remove('is-moving');
        // add the 'is-moved' class for 600ms then remove it
        window.setTimeout(function () {
          card.classList.add('is-moved');
          window.setTimeout(function () {
            card.classList.remove('is-moved');
          }, 600);
        }, 100);

        //this card id
        var this_task_id = $(card).attr('data-task-id');

        //previous card's task  id
        var previous_list = $(card).prevAll()
        var previous_task_id = '';
        previous_list.each(function () {
          if ($(this).hasClass('kanban-card')) {
            previous_task_id = $(this).attr('data-task-id');
            return false;
          }
        });

        //next card's task id
        var next_task_id = $(card).next('.kanban-card').attr('data-task-id');
        if (typeof next_task_id == 'undefined') {
          next_task_id = '';
        }

        //board
        var board_name = $(card).parent('.kanban-content').attr('data-board-name');

        //ajax update request
        /*
        var update_position = $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            type: 'post',
            url: task_position,
            dataType: 'json',
            data: 'task_id=' + this_task_id + '&previous_task_id=' + previous_task_id +
                '&next_task_id=' + next_task_id + '&status=' + board_name,
        });
        */

        //make a virtual ajax request
        var virtualDom = $('<div>', {
          attr: {
            'data-url': task_position,
            'data-ajax-type': 'post',
            'data-progress-bar': 'hidden'
          }
        });
        var virtualPostArray = {
          task_id: this_task_id,
          previous_task_id: previous_task_id,
          next_task_id: next_task_id,
          status: board_name,
        };

        nxAjaxUxRequest(virtualDom, virtualPostArray);
      });
  }
}
if ($("#js-tasks-kanban-wrapper").length) {
  NXTasksKanban();
}

/**--------------------------------------------------------------------------------------
 * [LEADS - SHOW] 
 * @description: js on lead card
 * -------------------------------------------------------------------------------------*/
function NXLeadAttachFiles() {

  $("#fileupload_lead").dropzone({
    url: "/fileupload",
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },
    init: function () {
      this.on("error", function (file, message, xhr) {

        //is there a message from backend [abort() response]
        if (typeof xhr != 'undefined' && typeof xhr.response != 'undefined') {
          var error = $.parseJSON(xhr.response);
          var message = error.notification.value;
        }

        //any other message
        var message = (typeof message == 'undefined' || message == '' ||
          typeof message == 'object') ? NXLANG.generic_error : message;

        //error message
        NX.notification({
          type: 'error',
          message: message
        });
        //remove the file
        this.removeFile(file);
      });
    },
    success: function (file, response) {
      //get the priview box dom elemen
      var $preview = $(file.previewElement);
      //create a hidden form field for this file
      $preview.append('<input type="hidden" name="attachments[' + response.uniqueid +
        ']"  value="' + response.filename + '">');
    }
  });
}


/**--------------------------------------------------------------------------------------
 * [MILESTONE PAGE] 
 * @description: drag and drop table rows
 * -------------------------------------------------------------------------------------*/
function NXMilestonesDragDrop() {

  //change task color - update form field
  $(document).on('change', '.milestone_colors', function () {
    if (this.checked) {
      $("#milestone_color").val($(this).val());
    }
  });


  if ($("#js-trigger-milestones-sorting").length) {
    /*----------------------------------------------------------------
     * drag and drop milestone positions
     *--------------------------------------------------------------*/
    var container = document.getElementById('milestones-td-container');

    var stagesDraggable = dragula([container]);

    //make every board dragable area
    stagesDraggable.on('drag', function (stage) {
      stage.classList.add('is-moving');
    });
    stagesDraggable.on('dragend', function (stage) {
      stage.classList.remove('is-moving');
      window.setTimeout(function () {
        stage.classList.add('is-moved');
        window.setTimeout(function () {
          stage.classList.remove('is-moved');
        }, 600);
      }, 100);

      //update the list
      nxAjaxUxRequest($("#milestones-table"));
    });
  }
}
if ($("#js-trigger-milestones-sorting").length) {
  NXMilestones();
}


/**--------------------------------------------------------------------------------------
 * [MILESTONE MODAL] 
 * @description: validation on creating milestone
 * -------------------------------------------------------------------------------------*/
function NXMilestonesCreate() {

  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      milestone_title: "required",
    },
    submitHandler: function (form) {
      //ajax form, so initiate ajax request here
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}



/**--------------------------------------------------------------------------------------
 * [NOTES MODAL] 
 * @description: validation on creating notes
 * -------------------------------------------------------------------------------------*/
function NXNotesCreate() {

  nxTinyMCEBasic();

  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      note_title: "required",
      note_description: "required"
    },
    submitHandler: function (form) {

      //ajax form, so initiate ajax request here
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}



/**--------------------------------------------------------------------------------------
 * [LEFT MENU - CLIENTS] 
 * @blade : nav\leftmenu-client.blade.php
 * @description: js for the left menu
 * -------------------------------------------------------------------------------------*/
function NXANavCLient() {
  $(".sidenav-menu-item").has("ul").addClass('has-submenu');
}
if ($("#js-trigger-nav-client").length) {
  NXHomeClient();
}



/**--------------------------------------------------------------------------------------
 * [LEFT MENU - CLIENTS] 
 * @blade : nav\leftmenu-team.blade.php
 * @description: js for the left menu
 * -------------------------------------------------------------------------------------*/
function NXANavTeam() {
  /*----------------------------------------------------------------
   * add special class to menu items that have submenu
   *--------------------------------------------------------------*/
  $(".sidenav-menu-item").has("ul").addClass('has-submenu');


  /*----------------------------------------------------------------
   * left menu scroll
   *---------------------------------------------------------------*/
  $(document).on('click', '.sidebartoggler ', function () {
    //scroll mini menu back to top
    document.getElementById('main-scroll-sidebar').scrollTop = 0;
  });



  /*----------------------------------------------------------------
   * left menu toltip
   *---------------------------------------------------------------*/
  if ($('body').hasClass('mini-sidebar')) {
    $(".menu-with-tooltip").addClass('menu-tooltip');
  } else {
    $(".menu-with-tooltip").removeClass('menu-tooltip');
  }
  $('.menu-tooltip').tooltip({
    trigger: 'hover',
    placement: 'right',
    template: '<div class="tooltip menu-tooltips" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
  });
  $(document).on('click', '.menu-tooltip', function () {
    $('.menu-tooltip menu-with-tooltip').tooltip("hide");
  });
}
if ($("#js-trigger-nav-team").length) {
  NXANavTeam();
  nxMainLeftMenuScroll();
}



/**--------------------------------------------------------------------------------------
 * [STRIPE BUTTON] 
 * @description: geneate button shown on invoice page
 * -------------------------------------------------------------------------------------*/
function NXStripePaymentButton() {

  //get api keys
  var stripe_api_key = $("#js-pay-stripe").attr('data-key');
  var payment_session = $("#js-pay-stripe").attr('data-session');

  //redirect user to checkout page
  $(document).on('click', '#invoice-stripe-payment-button', function () {
    //set stripe public ket
    var stripe = Stripe(stripe_api_key);
    //redirect to stripe checkout page
    stripe.redirectToCheckout({
      sessionId: payment_session
    }).then(function (result) {
      //an error occured and stripe could not redirect
    });
  });
}


/**--------------------------------------------------------------------------------------
 * [STRIPE BUTTON] 
 * @description: geneate button shown on invoice page
 * -------------------------------------------------------------------------------------*/
function NXRazorpayPaymentButton() {
  $.ajaxSetup({
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  });
  $(document).ready(function () {
    $('body').on('click', '#invoice-razorpay-payment-button', function (e) {
      //get vars
      var keyid = $(this).attr("data-key");
      var amount = $(this).attr("data-amount");
      var currency = $(this).attr("data-currency");
      var company_name = $(this).attr("data-company-name");
      var description = $(this).attr("data-description");
      var image = $(this).attr("data-image");
      var thankyou_url = $(this).attr("data-thankyou-url");
      var client_name = $(this).attr("data-client-name");
      var client_email = $(this).attr("data-client-email");
      var order_id = $(this).attr("data-order-id");
      //initiate
      var options = {
        "key": keyid,
        "amount": amount,
        "currency": currency,
        "name": company_name,
        "description": description,
        "image": image,
        "order_id": order_id,
        "callback_url": thankyou_url,
        "prefill": {
          "name": client_name,
          "email": client_email,
        },
        "theme": {
          "color": "#3399cc"
        }
      };
      var rzp1 = new Razorpay(options);
      rzp1.open();
      e.preventDefault();
    });
  });
}


/**--------------------------------------------------------------------------------------
 * [PAYMENT MODAL] 
 * @description: validation for creating a new payment
 * -------------------------------------------------------------------------------------*/
function NXPayementCreate() {
  //validate
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      payment_invoiceid: "required",
      payment_amount: "required",
      payment_date: "required",
      payment_gateway: "required"
    },
    submitHandler: function (form) {
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}


/**--------------------------------------------------------------------------------------
 * [PROJECT DETAILS] 
 * @description: editing project details on project page
 * -------------------------------------------------------------------------------------*/
function NXProjectDetails() {

  //editor variables
  NX.project_description = $("#project-description");
  NX.project_description_original_text = $("#project-description").html();
  NX.project_descrition_selector = '#project-description';
  NX.project_description_submit = $("#project-description-submit")
  NX.project_description_edit = $("#project-description-edit")
  NX.project_description_height = $("#project-description").outerHeight();
  NX.project_details_tags_edit = $("#project-details-edit-tags")
  NX.project_details_tags = $("#project-details-tags")

  //edit button clicked
  $(document).on('click', '#project-description-button-edit', function () {
    NX.project_description_edit.hide();
    NX.project_description.addClass('tinymce-textarea');
    NX.project_details_tags.hide();
    NX.project_details_tags_edit.show();
    NX.project_description_submit.show();
    nxTinyMCEExtended(NX.project_description_height, NX.project_descrition_selector);
  });

  //cancel button clicked
  $(document).on('click', '#project-description-button-cancel', function () {
    NX.project_description.removeClass('tinymce-textarea');
    NX.project_description_submit.hide();
    NX.project_description_edit.show();
    NX.project_details_tags.show();
    NX.project_details_tags_edit.hide();
    NX.project_description.html(NX.project_description_original_text);
    tinymce.remove();
  });
  //save button clicked
  $(document).off('click', '#project-description-button-save').on('click', '#project-description-button-save', function () {
    try {
      $("#description").val(tinymce.activeEditor.getContent());
    } catch (err) { }
    //unbind events
    $(this).off("click");
    $("#project-description-button-edit").off("click");
    $("#project-description-button-cancel").off("click");
    //make request
    nxAjaxUxRequest($(this));
    tinymce.remove();
  });
}


/**--------------------------------------------------------------------------------------
 * [PROJECT - DYNAMIC] 
 * @description: show dynamic project pages
 * -------------------------------------------------------------------------------------*/
if ($("#dynamic-project-content").length) {
  nxAjaxUxRequest($("#dynamic-project-content"));
}


/**--------------------------------------------------------------------------------------
 * [REPORTS - DYNAMIC] 
 * @description: show dynamic reports pages
 * -------------------------------------------------------------------------------------*/
if ($("#dynamic-reports-content").length) {
  nxAjaxUxRequest($("#dynamic-reports-content"));
}


/**--------------------------------------------------------------------------------------
 * [LEFT MENU - CLIENTS] 
 * @blade : nav\leftmenu-client.blade.php
 * @description: js for the left menu
 * -------------------------------------------------------------------------------------*/
function NXANavCLient() {
  $(".sidenav-menu-item").has("ul").addClass('has-submenu');
}
if ($("#js-trigger-nav-client").length) {
  NXHomeClient();
}


/**--------------------------------------------------------------------------------------
 * [PROJECT - CHARTS] 
 * @description: render charts of project page
 * -------------------------------------------------------------------------------------*/
if ($("#project_details").length) {
  var progress = $("#project_details").attr('data-progress');
  //set color
  var chart = c3.generate({
    bindto: '#project_progress_chart',
    data: {
      columns: [
        ['data', progress]
      ],
      type: 'gauge'
    },
    color: {
      pattern: ['#24d2b5']
    },
    gauge: {
      width: 22,
    },
    size: {
      height: 90,
      width: 150
    }
  });
}


/**--------------------------------------------------------------------------------------
 * PROJECT - MODAL] 
 * @description: edit projects modal
 * -------------------------------------------------------------------------------------*/
function NXAddEditProject() {


  //page section
  var page_section = $("#js-projects-modal-add-edit").attr('data-section');

  var project_progress = $("#js-projects-modal-add-edit").attr('data-project-progress');

  //reset editor
  nxTinyMCEBasic();

  //progress slider
  var progress = document.getElementById('edit_project_progress_bar');
  noUiSlider.create(progress, {
    start: [project_progress],
    connect: true,
    step: 1,
    range: {
      'min': 0,
      'max': 100
    }
  });
  //set display and hidden form field values
  var project_progress_input = document.getElementById('project_progress');
  var project_progress_display = document.getElementById('edit_project_progress_display');
  progress.noUiSlider.on('update', function (values, handle) {
    project_progress_display.innerHTML = values[handle];
    project_progress_input.value = values[handle];
  });



  /** ----------------------------------------------------------
   * create project - form validation
   * ---------------------------------------------------------*/
  if (page_section == 'create') {
    $("#commonModalForm").validate().destroy();
    $("#commonModalForm").validate({
      rules: {
        project_title: "required",
        project_clientid: "required",
        project_categoryid: "required",
        project_date_start: "required",
      },
      submitHandler: function (form) {
        //ajax form, so initiate ajax request here
        nxAjaxUxRequest($("#commonModalSubmitButton"));
      }
    });
  }


  /** ----------------------------------------------------------
   * edit project - form validation
   * ---------------------------------------------------------*/
  if (page_section == 'edit') {
    $("#commonModalForm").validate().destroy();
    $("#commonModalForm").validate({
      rules: {
        project_title: "required",
        project_categoryid: "required",
        project_date_start: "required",
      },
      submitHandler: function (form) {
        //ajax form, so initiate ajax request here
        nxAjaxUxRequest($("#commonModalSubmitButton"));
      }
    });
  }


  /** ----------------------------------------------------------
   * sanity - ensure views are checked also
   * ---------------------------------------------------------*/
  $("#clientperm_tasks_create, #clientperm_tasks_collaborate").on("change", function () {
    if ($(this).is(":checked")) {
      $("#clientperm_tasks_view").prop('checked', true);
    }
  });
  $("#clientperm_tasks_view").on("change", function () {
    if (!$(this).is(":checked")) {
      $("#clientperm_tasks_collaborate").prop('checked', false);
      $("#clientperm_tasks_create").prop('checked', false);
    }
  });


  /** ----------------------------------------------------------
   * clean up lead value field - strip symbols and none numric
   * ---------------------------------------------------------*/
  $(document).on('click', '#commonModalSubmitButton', function () {
    if ($('#project_billing_rate').length) {
      var project_billing_rate = $("#project_billing_rate").val();
      $("#project_billing_rate").val(project_billing_rate.replace(/[^0-9.]/g, ""));
    }
  });


  /** ----------------------------------------------------------
   * select2 firefox fix
   * ---------------------------------------------------------*/
  $('#project_clientid').select2({
    dropdownParent: $('#commonModal')
  });


  //client list has been reset or cleared
  $(document).on("select2:unselecting", "#project_template_selector", function (e) {
    //set new data
    $("#project_title").val('');

    $("#project_categoryid").val(1);
    $("#project_categoryid").trigger("change");

    $("#assignedperm_tasks_collaborate").prop('checked', false);
    $("#clientperm_tasks_view").prop('checked', false);
    $("#clientperm_tasks_collaborate").prop('checked', false);
    $("#clientperm_tasks_create").prop('checked', false);
    $("#clientperm_timesheets_view").prop('checked', false);
    $("#clientperm_expenses_view").prop('checked', false);
    $("#project_billing_rate").val('');
    $("#project_billing_type").val('hourly');
    $("#project_billing_type").trigger("change");
    $("#project_billing_estimated_hours").val('');
    $("#project_billing_costs_estimate").val('');

    //reset all custom fields
    /*
    $(".a-custom-field").val('');
    $(".a-custom-field").prop('checked', false);
    $(".a-custom-field").html('');
    try {
        $(".a-custom-field").val('').trigger('change');
    } catch {
        //nothing
    }
    */

    //also reset via ajax (to make sure also clear tinym
    nxAjaxUxRequest($("#project_template_selector"));

    //reset tiny mce
    tinymce.get('project_description').setContent('');
    $("#project_description").html('');
    $("#project_description").val('');


  });


  //client list has been reset or cleared
  $(document).off("select2:select", "#project_template_selector").on("select2:select", "#project_template_selector", function (e) {

    //set new data
    $("#project_title").val($(this).find(':selected').attr('data-title'));

    $("#project_categoryid").val($(this).find(':selected').attr('data-category'));
    $("#project_categoryid").trigger("change");

    $("#assignedperm_tasks_collaborate").prop('checked', ($(this).find(':selected').attr('data-client-task-collaborate')) == 'yes' ? true : false);
    $("#clientperm_tasks_view").prop('checked', ($(this).find(':selected').attr('data-client-task-view') == 'yes') ? true : false);
    $("#clientperm_tasks_collaborate").prop('checked', ($(this).find(':selected').attr('data-client-task-collaborate') == 'yes') ? true : false);
    $("#clientperm_tasks_create").prop('checked', ($(this).find(':selected').attr('data-client-task-create') == 'yes') ? true : false);
    $("#clientperm_timesheets_view").prop('checked', ($(this).find(':selected').attr('data-client-view-timesheets') == 'yes') ? true : false);
    $("#clientperm_expenses_view").prop('checked', ($(this).find(':selected').attr('data-client-view-expenses') == 'yes') ? true : false);
    $("#project_billing_rate").val($(this).find(':selected').attr('data-billing-rate'));
    $("#project_billing_type").val($(this).find(':selected').attr('data-billing-type'));
    $("#project_billing_type").trigger("change");

    $("#project_billing_estimated_hours").val($(this).find(':selected').attr('data-billing-estimated-hours'));
    $("#project_billing_costs_estimate").val($(this).find(':selected').attr('data-billing-estimated-cost'));

    //reset all custom fields
    $(".a-custom-field").val('');
    $(".a-custom-field").prop('checked', false);
    $(".a-custom-field").html('');
    try {
      $(".a-custom-field").val('').trigger('change');
    } catch {
      //nothing
    }

    //get new fields data
    nxAjaxUxRequest($(this).find(':selected'));

  });
}


/**--------------------------------------------------------------------------------------
 * CLIENT - MODAL] 
 * @description: edit client modal
 * -------------------------------------------------------------------------------------*/
function NXAddEditClients() {
  //page
  var page_section = $("#js-trigger-clients-modal-add-edit").attr('data-payload');
  //validate create clients
  if (page_section == 'create') {
    $("#commonModalForm").validate().destroy();
    $("#commonModalForm").validate({
      rules: {
        client_company_name: "required",
        first_name: "required",
        last_name: "required",
        email: "required",
      },
      submitHandler: function (form) {
        //ajax form, so initiate ajax request here
        nxAjaxUxRequest($("#commonModalSubmitButton"));
      }
    });
  }


  //edit client
  if (page_section == 'edit') {
    //show address section by default
    $("#add_client_address_section").show();
    $("#add_client_other_details").show();
    $("#commonModalForm").validate().destroy();
    $("#commonModalForm").validate({
      rules: {
        client_company_name: "required",
      },
      submitHandler: function (form) {

        //ajax form, so initiate ajax request here
        nxAjaxUxRequest($("#commonModalSubmitButton"));
      }
    });
  }
}

function NXFeedbackLists() {
  let currentPage = 1;
  let itemsPerPage = 5;
  let searchTerm = '';

  function fetchData() {
    const url = "/feedback/fetch"
    $.ajax({
      url,
      method: "GET",
      data: {
        page: currentPage,
        per_page: itemsPerPage,
        search: searchTerm
      },
      success: function (response) {
        if (response.feedbacks.length > 0) {
          renderFeedbackList(response.feedbacks, true);
        } else {
          renderFeedbackList(response.message, false);
        }
        renderPagination(response.pagination);
      },
      error: function () {
        setTimeout(function () {
          fetchData();
        }, 10)
      }
    });
  }

  function renderStars(starCount) {
    let html = "";
    const fullStars = Math.floor(starCount) + (starCount % 1 >= 0.75 ? 1 : 0);
    const hasHalf = starCount % 1 >= 0.25 && starCount % 1 < 0.75;
    const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

    for (let i = 0; i < fullStars; i++) html += `<i class="fas fa-star"></i>`;
    if (hasHalf) html += `<i class="fas fa-star-half-alt"></i>`;
    for (let i = 0; i < emptyStars; i++) html += `<i class="far fa-star"></i>`;

    return html;
  }

  function renderPagination(pagination) {
    const paginationEl = $("#pagination");
    paginationEl.html("");

    paginationEl.append(`
            <li class="page-item ${pagination.current_page === 1 ? 'disabled' : ''}">
                <a class="page-link" href="#" data-page="${pagination.current_page - 1}">Prev</a>
            </li>
        `);

    for (let i = 1; i <= pagination.last_page; i++) {
      paginationEl.append(`
                <li class="page-item ${i === pagination.current_page ? 'active' : ''}">
                    <a class="page-link" href="#" data-page="${i}">${i}</a>
                </li>
            `);
    }

    paginationEl.append(`
            <li class="page-item ${pagination.current_page === pagination.last_page ? 'disabled' : ''}">
                <a class="page-link" href="#" data-page="${pagination.current_page + 1}">Next</a>
            </li>
        `);
  }

  function renderFeedbackList(feedbacks, hasData) {
    const container = $("#feedbackList");
    container.html("");
    if (hasData) {
      feedbacks.forEach((fb, index) => {
        const block = $(`
                <div class="feedback-block position-relative" style="padding-top: 10px;">
                <!-- Delete Button -->
                <a data-feedback-id="${fb.feedback_id}" class="delete-btn btn btn-sm btn-outline-danger rounded-circle border-0 position-absolute" style="top: 0.2rem; right: 0.2rem; z-index: 1;">
                  <i class="fas fa-trash-alt"></i>
                </a>
              
                <div class="d-flex align-items-center mb-2" style="flex-wrap: wrap;">
                  <div class="score-badge ml-3 mr-3" style="min-width: 50px; text-align: center;">
                    ${parseFloat(fb.total_marks).toFixed(1)}
                  </div>
                  <div style="flex: 1; min-width: 0;">
                    <div class="text-muted small">${fb.feedback_date_human}</div>
                    <div class="font-weight-bold text-break">
                      ${(typeof fb.comment === 'string' ? '"' + fb.comment + '"' : '')}
                    </div>
                  </div>
                  <div class="action-area ml-2 mr-4">
                    <div class="feedback-stars">${renderStars(fb.total_marks / 2)}</div>
                  </div>
                </div>
              </div>
                `);
        container.append(block);
      });
      deleteModalInit();
    } else {
      container.append(
        `<div class="feedback-block alert-danger">
                    ${feedbacks}                    
         </div>`
      )
    }
  }

  /**
   * ******************************** To delete feedback *****************************
   *                             On Delete Button Click Event Init                   *
   * *********************************************************************************
   */
  function deleteModalInit() {
    let deleteId = null;

    // Handle delete button click
    $('a.delete-btn').on('click', function () {
      const url = '/feedback/delete';
      $('#basicModal').modal('show');
      $.ajax({ url })
        .then(response => {
          if (response.success) {
            $('#basicModal').html(response.html);
            initConfirmHandle();
          }
          else {
            NX.notification({
              type: 'error',
              message: 'This is unknown error.'
            })
            return;
          }
        })
        .catch(err => console.log(err))
      deleteId = $(this).data('feedback-id');
    });

    // Confirm delete via AJAX
    const initConfirmHandle = function () {
      $('#confirmDeleteBtn').on('click', function () {
        const url = '/feedback/delete/' + deleteId;
        if (deleteId) {
          $.ajax({
            url: url, // <- Replace with your endpoint
            headers: {
              'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            type: 'DELETE',
            success: function (response) {
              if (response.success) {
                $('#basicModal').modal('hide');
                NX.notification({
                  type: 'success',
                  message: response.message
                });
                NXFeedbackLists().init();
              } else {
                NX.notification({
                  type: 'error',
                  message: 'Can not delete because of unknown error.'
                });
              }
              console.log('Deleted:', deleteId);
            },
            error: function (xhr, status, error) {
              NX.notification({
                type: 'error',
                message: error.message
              });
              console.error('Delete failed:', error);
              $('#deleteModal').modal('hide');
            }
          });
        }
      });
    }
  }

  // Event Listeners

  return {
    init: function () {
      fetchData();

      $("#searchInput").on("input", function () {
        searchTerm = $(this).val();
        currentPage = 1;
        fetchData();
      });

      $("#itemsPerPage").on("change", function () {
        itemsPerPage = parseInt($(this).val());
        currentPage = 1;
        fetchData();
      });

      $(document).on("click", ".page-link", function (e) {
        e.preventDefault();
        const page = parseInt($(this).data("page"));
        if (!isNaN(page)) {
          currentPage = page;
          fetchData();
        }
      });
    }
  }
}

/**--------------------------------------------------------------------------------------
 * CLIENT - MODAL] 
 * @description: edit feedback modal
 * -------------------------------------------------------------------------------------*/
function NXAddEditFeedback() {
  $(document).ready(function () {
    // Button selection
    $(document).on("click", 'button[data-question]', function () {
      const qid = $(this).data('question');
      $(`button[data-question="${qid}"]`).removeClass('btn-primary').addClass('btn-outline-info');
      $(this).removeClass('btn-outline-info').addClass('btn-primary');
    });

    // Star selection
    $(document).on("click", '.editable.fa-star', function () {
      console.log('sdfas');
      const value = $(this).data("value");
      const parent = $(this).parent();
      parent.find(".editable.fa-star").removeClass("fas").addClass("far");
      parent.find(".editable.fa-star").each(function () {
        if ($(this).data("value") <= value) {
          $(this).removeClass("far").addClass("fas");
        }
      });
      parent.data("selected", value);
    });
  });

  const getAllValues = function () {
    const results = {};

    // Button-type questions
    $('#questions-container .form-group').each(function () {
      // Button group
      const btn = $(this).find('button.btn-primary[data-question]');
      if (btn.length) {
        const qid = btn.data('question');
        results[qid.toString()] = btn.data('value');
      }

      // Star group
      const starDiv = $(this).find('div[data-question]');
      if (starDiv.length && starDiv.data('selected') !== undefined) {
        const qid = starDiv.data('question');
        results[qid.toString()] = starDiv.data('selected');
      }

      // Select group
      const select = $(this).find('select[data-question]');
      if (select.length) {
        const qid = select.data('question');
        results[qid.toString()] = select.val();
      }
    });

    // Comment
    results.comment = $("#comment").val();

    return results;
  }

  const validator = function () {
    const results = getAllValues();
    console.log(results);
    if (document.querySelectorAll('.feedback-block.feedback-query-answer').length ===
      Object.keys(results).filter(key => key !== 'comment').length) {
      return results;
    }
    return false;
  };

  const submitHandler = function (status, id) {
    const url = status === 'edit' ? 'feedback/edit/' + id : 'feedback/create';
    const method = status === 'edit' ? 'PUT' : 'POST';
    const results = validator();
    if (!results) {
      NX.notification({
        type: 'error',
        message: 'you should enter require fields.'
      })
      return;
    }
    $.ajax({
      headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      },
      type: method,
      url,
      data: results
    })
      .then(response => {

        NX.notification({
          type: response.notification.type,
          message: response.notification.value
        });
        NXFeedbackLists().init();
        $('#basicModal').modal('hide');
      })
      .catch(err => {
        NX.notification({
          type: 'error',
          message: err.message
        });
        console.log(err);
      })
  }

  // Form submit
  $("#feedbackForm").submit(function (e) {
    e.preventDefault();
    submitHandler();
  });
}


/**--------------------------------------------------------------------------------------
 * [SETUP WIZARD]
 * @description: admin details section - form validation
 * -------------------------------------------------------------------------------------*/
function NXSetupAdmin() {
  $("#setupForm").validate({
    rules: {
      first_name: "required",
      last_name: "required",
      email: "required",
      password: "required",
    },
    submitHandler: function (form) {
      nxAjaxUxRequest($("#continueButton"));
    }
  });
}

/**--------------------------------------------------------------------------------------
 * [SETUP WIZARD]
 * @description: database details section - form validation
 * -------------------------------------------------------------------------------------*/
function NXSetupDatabase() {
  $("#setupForm").validate({
    rules: {
      database_host: "required",
      database_port: "required",
      database_name: "required",
      database_username: "required",
    },
    submitHandler: function (form) {
      nxAjaxUxRequest($("#continueButton"));
    }
  });
}


/**--------------------------------------------------------------------------------------
 * [SETUP WIZARD]
 * @description: database details section - form validation
 * -------------------------------------------------------------------------------------*/
function NXSetupSettings() {
  $("#setupForm").validate({
    rules: {
      settings_company_name: "required",
      settings_system_timezone: "required",
    },
    submitHandler: function (form) {
      nxAjaxUxRequest($("#continueButton"));
    }
  });
}


/**--------------------------------------------------------------------------------------
 * [TAGS MODAL]
 * @description: add tags form validation
 * -------------------------------------------------------------------------------------*/
function NXTagsCreate() {
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      tag_title: "required",
      tagresource_type: "required",
    },
    submitHandler: function (form) {
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}


/**--------------------------------------------------------------------------------------
 * [TAGS MENU]
 * @description: trigger fortags page
 * -------------------------------------------------------------------------------------*/
function NXTagsMenu() {
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      tag_title: "required",
      tagresource_type: "required",
    },
    submitHandler: function (form) {
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}


/**--------------------------------------------------------------------------------------
 * [TAGS MENU]
 * @description: trigger fortags page
 * -------------------------------------------------------------------------------------*/
function NXTeamCreate() {
  $("#password, #password_confirmation").val('');
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      first_name: 'required',
      last_name: 'required',
      email: 'required',
      role_id: 'required'
    },
    submitHandler: function (form) {

      //ajax form, so initiate ajax request here
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}


/**--------------------------------------------------------------------------------------
 * [TICKET COMPOSE] 
 * @description: create new ticket
 * -------------------------------------------------------------------------------------*/
if ($("#ticket-compose-form").length) {

  //variable
  var user_type = $("#ticket-compose-form").attr('data-user-type');


  //validate
  if (user_type == 'client') {
    $("#ticket-compose-form").validate({
      rules: {
        ticket_categoryid: "required",
        ticket_subject: "required",
        ticket_message: "required",
      },
      submitHandler: function (form) {
        //ajax form, so initiate ajax request here
        nxAjaxUxRequest($("#ticket-compose-form-button"));
      }
    });
  }

  if (user_type == 'team') {
    $("#ticket-compose-form").validate({
      rules: {
        ticket_categoryid: "required",
        ticket_subject: "required",
        ticket_message: "required",
        ticket_clientid: "required",
        ticket_priority: "required",
      },
      submitHandler: function (form) {
        //ajax form, so initiate ajax request here
        nxAjaxUxRequest($("#ticket-compose-form-button"));
      }
    });
  }

  //fileupload
  $("#fileupload_ticket").dropzone({
    url: "/fileupload",
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },
    init: function () {
      this.on("error", function (file, message, xhr) {

        //is there a message from backend [abort() response]
        if (typeof xhr != 'undefined' && typeof xhr.response != 'undefined') {
          var error = $.parseJSON(xhr.response);
          var message = error.notification.value;
        }

        //any other message
        var message = (typeof message == 'undefined' || message == '' ||
          typeof message == 'object') ? NXLANG.generic_error : message;

        //error message
        NX.notification({
          type: 'error',
          message: message
        });
        //remove the file
        this.removeFile(file);
      });
    },
    success: function (file, response) {
      //get the priview box dom elemen
      var $preview = $(file.previewElement);
      //create a hidden form field for this file
      $preview.append('<input type="hidden" name="attachments[' + response.uniqueid +
        ']"  value="' + response.filename + '">');
    }
  });
}


/**--------------------------------------------------------------------------------------
 * [TICKETS EDIT]
 * @description: validation for tickets page
 * -------------------------------------------------------------------------------------*/
function NXTicketEdit() {
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      ticket_categoryid: "required",
      ticket_subject: "required",
      ticket_message: "required",
      ticket_clientid: "required",
      ticket_priority: "required",
    },
    submitHandler: function (form) {
      //ajax form, so initiate ajax request here
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}


/**--------------------------------------------------------------------------------------
 * [TICKETS EDIT]
 * @description: validation for tickets page
 * -------------------------------------------------------------------------------------*/
if ($("#ticket-editor").length) {
  $("#editTicketMessage").validate({
    rules: {

    },
    submitHandler: function (form) {
      nxAjaxUxRequest($("#editTicketMessageButton"));
    }
  });
}


/**--------------------------------------------------------------------------------------
 * [CLIENT DYNAMIC]
 * @description: load dynamic client page contact
 * -------------------------------------------------------------------------------------*/
if ($("#dynamic-client-content").length) {
  nxAjaxUxRequest($("#dynamic-client-content"));
}

/**--------------------------------------------------------------------------------------
 * [TICKETS REPLY]
 * @description: validation for tickets reply modal
 * -------------------------------------------------------------------------------------*/
function NXTicketReplay() {
  //file upload
  $("#fileupload_ticket_reply").dropzone({
    url: "/fileupload",
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },
    init: function () {
      this.on("error", function (file, message, xhr) {

        //is there a message from backend [abort() response]
        if (typeof xhr != 'undefined' && typeof xhr.response != 'undefined') {
          var error = $.parseJSON(xhr.response);
          var message = error.notification.value;
        }

        //any other message
        var message = (typeof message == 'undefined' || message == '' ||
          typeof message == 'object') ? NXLANG.generic_error : message;

        //error message
        NX.notification({
          type: 'error',
          message: message
        });
        //remove the file
        this.removeFile(file);
      });
    },
    success: function (file, response) {
      //get the priview box dom elemen
      var $preview = $(file.previewElement);
      //create a hidden form field for this file
      $preview.append('<input type="hidden" name="attachments[' + response.uniqueid +
        ']"  value="' + response.filename + '">');
    }
  });

  //validation
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      ticketreply_text: "required",
    },
    submitHandler: function (form) {
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}




/**--------------------------------------------------------------------------------------
 * [USER - UPDATE AVATAR]
 * @description: validation for user avatar modal
 * -------------------------------------------------------------------------------------*/
function NXUserUpdateAvatar() {

  //upload avatar
  $("#fileupload_avatar").dropzone({
    url: "/avatarupload",
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },
    maxFiles: 1,
    maxFilesize: 2, // MB
    acceptedFiles: 'image/jpeg, image/png',
    thumbnailWidth: null,
    thumbnailHeight: null,
    init: function () {
      this.on("error", function (file, message, xhr) {

        //is there a message from backend [abort() response]
        if (typeof xhr != 'undefined' && typeof xhr.response != 'undefined') {
          var error = $.parseJSON(xhr.response);
          var message = error.notification.value;
        }

        //any other message
        message = (typeof message == 'undefined' || message == '' ||
          typeof message == 'object') ? NXLANG.generic_error : message;

        //error message
        NX.notification({
          type: 'error',
          message: message
        });
        //remove the file
        this.removeFile(file);
      });
    },
    success: function (file, response) {
      //get the priview box dom elemen
      var $preview = $(file.previewElement);
      //create a hidden form field for this file
      $preview.append('<input type="hidden" name="avatar_filename"  value="' + response.filename + '">');
      $preview.append('<input type="hidden" name="avatar_directory"  value="' + response.uniqueid + '">');
    }
  });


  //validation
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {},
    submitHandler: function (form) {
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });

}


/**--------------------------------------------------------------------------------------
 * [USER - UPDATE PASSWORD]
 * @description: validation for user update passwod
 * -------------------------------------------------------------------------------------*/
function NXUserUpdatePassword() {
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      password: {
        minlength: 6,
        required: true,
      },
      password_confirmation: {
        equalTo: "#password"
      },
    },
    submitHandler: function (form) {
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}


/**--------------------------------------------------------------------------------------
 * [SETTINGS DYNAMIC]
 * @description: settings dynamic content
 * -------------------------------------------------------------------------------------*/
if ($("#dynamic-settings-content").length) {
  nxAjaxUxRequest($("#dynamic-settings-content"));
}



/**--------------------------------------------------------------------------------------
 * [SETTINGS - KNOWLDGEBASE]
 * @description: validation for KNOWLEDGEBASE
 * -------------------------------------------------------------------------------------*/
function NXSettingsKnowledgebase() {


  //formvalidation
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      kbcategory_title: "required"
    },
    submitHandler: function (form) {
      //ajax request
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });



  //icon selection
  $(".js-icon-selector").on('click', function () {
    var value = $(this).attr('data-val');
    //reset active
    $(".js-icon-selector").removeClass('active');
    $(this).addClass('active');
    //set input value
    $("#kbcategory_icon").val(value);
    //change display
    $("#icon-selector-display").removeClass();
    $("#icon-selector-display").addClass(value);
    //toggle whole section
    $("#category_display_icons_section").toggle();
  });


  //toggle icons
  $(".js-switch-toggle-icons").on('click', function () {
    $("#category_display_icons_section").toggle();
  });
}


/**--------------------------------------------------------------------------------------
 * [SETTINGS - KNOWLDGEBASE]
 * @description: drag and drop for categories
 * -------------------------------------------------------------------------------------*/
function NXSettingsKnowledgebaseCategories() {

  //replace action button
  $(".parent-page-actions").html('');
  $("#list-page-actions").prependTo(".parent-page-actions");


  //drag and drop categories
  var container = document.getElementById('categories-td-container');

  var stagesDraggable = dragula([container]);


  //make every board dragable area
  stagesDraggable.on('drag', function (stage) {
    // add 'is-moving' class to element being dragged
    stage.classList.add('is-moving');
  });
  stagesDraggable.on('dragend', function (stage) {
    // remove 'is-moving' class from element after dragging has stopped
    stage.classList.remove('is-moving');
    // add the 'is-moved' class for 600ms then remove it
    window.setTimeout(function () {
      stage.classList.add('is-moved');
      window.setTimeout(function () {
        stage.classList.remove('is-moved');
      }, 600);
    }, 100);

    //update the list
    nxAjaxUxRequest($("#knowledgebase-categories"));

  });
}


/**--------------------------------------------------------------------------------------
 * [SETTINGS - LEAD STATUS]
 * @description: form aldation for lead status
 * -------------------------------------------------------------------------------------*/
function NXSettingsLeadStatus() {


  //change lead color - update form field
  $(document).on('change', '.leadstatus_colors', function () {
    if (this.checked) {
      $("#leadstatus_color").val($(this).val());
    }
  });


  //create status - form validation
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      leadstatus_title: "required"
    },
    submitHandler: function (form) {
      //set selector color
      $(".leadstatus_colors").each(function () {
        if (this.checked) {
          $("#leadstatus_color").val($(this).val());
        }
      });
      //ajax request
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });

}


/**--------------------------------------------------------------------------------------
 * [SETTINGS - LEAD DRAG & DROP]
 * @description: drag and drop for leads
 * -------------------------------------------------------------------------------------*/
function NXSettingsLeadDragDrop() {

  //replace action buttons
  $(".parent-page-actions").html('');
  $("#list-page-actions").prependTo(".parent-page-actions");

  //drag and drop lead positions
  var container = document.getElementById('status-td-container');
  var stagesDraggable = dragula([container]);

  //make every board dragable area
  stagesDraggable.on('drag', function (stage) {
    // add 'is-moving' class to element being dragged
    stage.classList.add('is-moving');
  });
  stagesDraggable.on('dragend', function (stage) {
    // remove 'is-moving' class from element after dragging has stopped
    stage.classList.remove('is-moving');
    // add the 'is-moved' class for 600ms then remove it
    window.setTimeout(function () {
      stage.classList.add('is-moved');
      window.setTimeout(function () {
        stage.classList.remove('is-moved');
      }, 600);
    }, 100);

    //update the list
    nxAjaxUxRequest($("#lead-stages"));

  });
}



/**--------------------------------------------------------------------------------------
 * [SETTINGS - UPLOAD LOGO]
 * @description: apload app logo
 * -------------------------------------------------------------------------------------*/
function NXSettingsLogo() {

  //set variables and payload
  var logo_size = $("#js-settings-logos-modal").attr('data-size');

  //upload logo
  $("#fileupload_single_image").dropzone({
    url: "/upload-app-logo?logo_size=" + logo_size,
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },
    maxFiles: 1,
    maxFilesize: 2, // MB
    acceptedFiles: 'image/jpeg, image/png',
    thumbnailWidth: null,
    thumbnailHeight: null,
    init: function () {
      this.on("error", function (file, message, xhr) {

        //is there a message from backend [abort() response]
        if (typeof xhr != 'undefined' && typeof xhr.response != 'undefined') {
          var error = $.parseJSON(xhr.response);
          var message = error.notification.value;
        }

        //any other message
        var message = (typeof message == 'undefined' || message == '' ||
          typeof message == 'object') ? NXLANG.generic_error : message;

        //error message
        NX.notification({
          type: 'error',
          message: message
        });
        //remove the file
        this.removeFile(file);
      });
    },
    success: function (file, response) {
      //get the priview box dom elemen
      var $preview = $(file.previewElement);
      //create a hidden form field for this file
      $preview.append('<input type="hidden" name="logo_filename"  value="' + response
        .filename + '">');
      $preview.append('<input type="hidden" name="logo_directory"  value="' + response
        .uniqueid + '">');
      $preview.append('<input type="hidden" name="logo_size"  value="' + response
        .logo_size + '">');
    }
  });


  //upload logo - form validation
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {},
    submitHandler: function (form) {
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}


/**--------------------------------------------------------------------------------------
 * [SETTINGS - MILESTONES]
 * @description: Add edit
 * -------------------------------------------------------------------------------------*/
function NXSettingsMilestones() {
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      milestonecategory_title: "required"
    },
    submitHandler: function (form) {
      //ajax request
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}


/**--------------------------------------------------------------------------------------
 * [SETTINGS - DROP & DROP]
 * @description: Add edit
 * -------------------------------------------------------------------------------------*/
function NXSettingsMilestonesDragDrop() {


  //change task color - update form field
  $(document).on('change', '.milestonecategory_colors', function () {
    if (this.checked) {
      $("#milestonecategory_color").val($(this).val());
    }
  });

  //replace action buttons
  $(".parent-page-actions").html('');
  $("#list-page-actions").prependTo(".parent-page-actions");


  //drag and drop milstone positions
  var container = document.getElementById('milestones-td-container');

  var stagesDraggable = dragula([container]);

  //make every board dragable area
  stagesDraggable.on('drag', function (stage) {
    // add 'is-moving' class to element being dragged
    stage.classList.add('is-moving');
  });
  stagesDraggable.on('dragend', function (stage) {
    // remove 'is-moving' class from element after dragging has stopped
    stage.classList.remove('is-moving');
    // add the 'is-moved' class for 600ms then remove it
    window.setTimeout(function () {
      stage.classList.add('is-moved');
      window.setTimeout(function () {
        stage.classList.remove('is-moved');
      }, 600);
    }, 100);

    //update the list
    nxAjaxUxRequest($("#milestone-stages"));
  });
}


/**--------------------------------------------------------------------------------------
 * [SETTINGS - CLIENTS]
 * @description: Add edit
 * -------------------------------------------------------------------------------------*/
function NXSettingsProjectsClients() {

  //sanity - ensure views are checked also
  $("#settings_projects_clientperm_tasks_create, #settings_projects_clientperm_tasks_collaborate").on(
    "change",
    function () {
      if ($(this).is(":checked")) {
        $("#settings_projects_clientperm_tasks_view").prop('checked', true).prop('disabled',
          true);
      } else {
        if (!$("#settings_projects_clientperm_tasks_create").is(":checked") && !$(
          "#settings_projects_clientperm_tasks_collaborate")
          .is(":checked")) {
          $("#settings_projects_clientperm_tasks_view").prop('disabled', false);
        }
      }
    });
  $("#settings_projects_clientperm_tasks_view").on("change", function () {
    if (!$(this).is(":checked")) {
      $("#settings_projects_clientperm_tasks_collaborate").prop('checked', false);
      $("#settings_projects_clientperm_tasks_create").prop('checked', false);
    }
  });

}


/**--------------------------------------------------------------------------------------
 * [SETTINGS - ROLES]
 * @description: Add edit roles
 * -------------------------------------------------------------------------------------*/
function NXSettingsRoles() {
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      role_name: "required"
    },
    submitHandler: function (form) {
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}



/**--------------------------------------------------------------------------------------
 * [SETTINGS - ROLES]
 * @description: Add edit roles
 * -------------------------------------------------------------------------------------*/
function NXSettingsRolesTable() {
  var $actions = $("#list-page-actions");
  $(".parent-page-actions").html('');
  $actions.prependTo(".parent-page-actions");
}


/**--------------------------------------------------------------------------------------
 * [SETTINGS - SOURCES]
 * @description: list sources
 * -------------------------------------------------------------------------------------*/
function NXSettingsSources() {
  var $actions = $("#list-page-actions");
  //replace action buttons
  $(".parent-page-actions").html('');
  $actions.prependTo(".parent-page-actions");
}



/**--------------------------------------------------------------------------------------
 * [SETTINGS - SOURCES]
 * @description: Add edit sources
 * -------------------------------------------------------------------------------------*/
function NXSettingsSourcesCreate() {
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      leadsources_title: "required"
    },
    submitHandler: function (form) {
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}

/**--------------------------------------------------------------------------------------
 * [SETTINGS - TAXES]
 * @description: list taxes
 * -------------------------------------------------------------------------------------*/
function NXSettingsTaxes() {
  var $actions = $("#list-page-actions");
  //replace action buttons
  $(".parent-page-actions").html('');
  $actions.prependTo(".parent-page-actions");
}


/**--------------------------------------------------------------------------------------
 * [SETTINGS - TAXES]
 * @description: Add edit taxes
 * -------------------------------------------------------------------------------------*/
function NXSettingsTaxesCreate() {
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      taxrate_name: "required",
      taxrate_value: "required"
    },
    submitHandler: function (form) {
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}




/**--------------------------------------------------------------------------------------
 * [SETTINGS - UPDATES]
 * @description: check for updates
 * -------------------------------------------------------------------------------------*/
function NXSettingsUpdate() {
  nxAjaxUxRequest($("#updates-checking"));
}


/**--------------------------------------------------------------------------------------
 * [SETTINGS - EMAIL TEMPLATES]
 * @description: load email templates editor
 * -------------------------------------------------------------------------------------*/
function NXSettingsEmailTemplates() {

  //text editor
  nxTinyMCEExtendedLite(500, '#emailtemplate_body');
  setTimeout(function () {
    $("#emailEditWrapper").removeClass('loading');
    $("#emailEditContainer").show();
  }, 1000);


  //fix for validator
  $("#fix-form-email-templates").validate({});
}




/**--------------------------------------------------------------------------------------
 * [SETTINGS - GENERAL]
 * @description: form validation
 * -------------------------------------------------------------------------------------*/
function NXSettingsGeneral() {
  $("#settingsFormGeneral").validate({
    rules: {
      settings_system_timezone: "required",
      settings_system_date_format: "required",
      settings_system_datepicker_format: "required",
      settings_system_default_leftmenu: "required",
      settings_system_default_statspanel: "required",
      settings_system_pagination_limits: "required",
      settings_system_kanban_pagination_limits: "required",
      settings_system_close_modals_body_click: "required",
      settings_system_language_default: "required",
      settings_system_language_allow_users_to_change: "required"
    },
    submitHandler: function (form) {
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}


/**--------------------------------------------------------------------------------------
 * [SETTINGS - CURRENCY]
 * @description: form validation
 * -------------------------------------------------------------------------------------*/
function NXSettingsCurrency() {
  $("#settingsFormCurrency").validate({
    rules: {
      settings_system_currency_code: "required",
      settings_system_currency_symbol: "required",
      settings_system_decimal_separator: "required",
      settings_system_thousand_separator: "required",
      settings_system_currency_position: "required",
    },
    submitHandler: function (form) {
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}


/**--------------------------------------------------------------------------------------
 * [SETTINGS - COMPANY]
 * @description: form validation
 * -------------------------------------------------------------------------------------*/
function NXSettingsCompany() {
  $("#settingsFormCompany").validate({
    rules: {
      settings_company_name: "required",
    },
    submitHandler: function (form) {
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}

/**--------------------------------------------------------------------------------------
 * [SETTINGS - FOO]
 * @description: form validation
 * -------------------------------------------------------------------------------------*/
function NXSettingsProjectsGeneral() {
  $("#settingsFormProjects").validate({
    rules: {
      settings_projects_default_hourly_rate: "required",
    },
    submitHandler: function (form) {
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}


/**--------------------------------------------------------------------------------------
 * [SETTINGS - INVOICES]
 * @description: form validation
 * -------------------------------------------------------------------------------------*/
function NXSettingsInvoices() {
  $("#settingsFormInvoices").validate({
    rules: {
      settings_invoices_recurring_grace_period: "required",
    },
    submitHandler: function (form) {
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}



/**--------------------------------------------------------------------------------------
 * [SETTINGS - PAYPAL]
 * @description: form validation
 * -------------------------------------------------------------------------------------*/
function NXSettingsPaypal() {
  $("#settingsFormPaypal").validate({
    rules: {
      settings_paypal_email: "required",
      settings_paypal_currency: "required",
      settings_paypal_display_name: "required",
      settings_stripe_ipn_url: "required"
    },
    submitHandler: function (form) {
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}


/**--------------------------------------------------------------------------------------
 * [SETTINGS - BANK]
 * @description: form validation 
 * -------------------------------------------------------------------------------------*/
function NXSettingsBank() {
  $("#settingsFormBank").validate({
    rules: {
      settings_bank_display_name: "required",
      settings_bank_status: "required"
    },
    submitHandler: function (form) {
      nxAjaxUxRequest($("#settings-submit-button"));
    }
  });
}


/**--------------------------------------------------------------------------------------
 * [SETTINGS - STRIPE]
 * @description: form validation
 * -------------------------------------------------------------------------------------*/
function NXSettingsStripe() {
  $("#settingsFormStripe").validate({
    rules: {
      settings_stripe_public_key: "required",
      settings_stripe_secret_key: "required",
      settings_stripe_webhooks_key: "required",
      settings_stripe_currency: "required",
      settings_stripe_display_name: "required",
      settings_stripe_ipn_url: "required",
    },
    submitHandler: function (form) {
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}


/**--------------------------------------------------------------------------------------
 * [SETTINGS - EMAIL]
 * @description: form validation
 * -------------------------------------------------------------------------------------*/
function NXSettingsEmailGeneral() {
  $("#settingsFormEmailGeneral").validate({
    rules: {
      settings_email_from_address: "required",
      settings_email_from_name: "required",
      settings_email_server_type: "required",
    },
    submitHandler: function (form) {
      nxAjaxUxRequest($("#email-general-settings-button"));
    }
  });
}



/**--------------------------------------------------------------------------------------
 * [SETTINGS - EMAIL]
 * @description: form validation
 * -------------------------------------------------------------------------------------*/
function NXSettingsEmailSMTP() {
  $("#settingsFormEmailSMTP").validate({
    rules: {
      settings_email_smtp_host: "required",
      settings_email_smtp_port: "required",
      settings_email_smtp_username: "required",
      settings_email_smtp_password: "required",
      settings_email_smtp_encryption: "required",
    },
    submitHandler: function (form) {
      nxAjaxUxRequest($("#email-smtp-settings-button"));
    }
  });
}



/**--------------------------------------------------------------------------------------
 * [SETTINGS - SEND TEST EMAIL]
 * @description: form validation
 * -------------------------------------------------------------------------------------*/
function NXEmailSettingTest() {
  //add category - form validation
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      email: "required"
    },
    submitHandler: function (form) {
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}


/**--------------------------------------------------------------------------------------
 * [SETTINGS - SUBSCRIPTIONS]
 * @description: form validation
 * -------------------------------------------------------------------------------------*/
function NXSettingsSubscriptions() {
  $("#settingsFormSubscriptions").validate({
    rules: {
      settings_subscriptions_prefix: "required",
    },
    submitHandler: function (form) {
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}


/**--------------------------------------------------------------------------------------
 * Form validation for converting an estimate to an invoice
 * @description: form validation
 * -------------------------------------------------------------------------------------*/
function NXConvertEstimetToInvoice() {
  //create status - form validation
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      bill_date_edit: "required",
      bill_due_date_edit: "required",
    },
    submitHandler: function (form) {
      //ajax request
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}


/**--------------------------------------------------------------------------------------
 * Form validation for converting an estimate to an invoice
 * @description: form validation
 * -------------------------------------------------------------------------------------*/
function NXRecordMyTmeModal() {

  //disable the submit button and form fields
  NX.recordTaskTimeToggle('disable');

  //create status - form validation
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      manual_time_hours: "required",
      manual_time_minutes: "required",
      timer_created_edit: "required",
    },
    submitHandler: function (form) {
      //ajax request
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}


/**--------------------------------------------------------------------------------------
 * This is an extenstion of NXRecordMyTmeModal() we use this on the task list page
 * to enable buttons and fields that were disabled by NXRecordMyTmeModal() 
 * @description: form validation
 * -------------------------------------------------------------------------------------*/
function NXRecordMyTmeModalExtra() {

  //disable the submit button and form fields
  NX.recordTaskTimeToggle('enable');
}




/**--------------------------------------------------------------------------------------
 * [IMPORT FILES]
 * file upload for the first step of the importing process
 * -------------------------------------------------------------------------------------*/
function NXImportingFileUpload() {

  //upload avatar
  $(".import-files-upload").dropzone({
    url: "/import/uploadfiles",
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },
    maxFiles: 1,
    maxFilesize: 10, // MB
    thumbnailWidth: null,
    thumbnailHeight: null,
    init: function () {
      this.on("error", function (file, message, xhr) {

        //is there a message from backend [abort() response]
        if (typeof xhr != 'undefined' && typeof xhr.response != 'undefined') {
          var error = $.parseJSON(xhr.response);
          var message = error.notification.value;
        }

        //any other message
        message = (typeof message == 'undefined' || message == '' ||
          typeof message == 'object') ? NXLANG.generic_error : message;

        //error message
        NX.notification({
          type: 'error',
          message: message
        });
        //remove the file
        this.removeFile(file);
      });
    },
    success: function (file, response) {
      //hide files
      $("#importing-step-1").hide();

      //show next step
      $("#importing-step-2").show();

      //show submit button
      $("#commonModalFooter").show();

      //save info about the files
      $("#importing-file-name").val(response.filename);
      $("#importing-file-uniqueid").val(response.uniqueid);

      //show splash
      $("#import-payload-preview-" + response.extension).show();
      $("#import-payload-preview-text").show();

      //change display file name
      $("#import-payload-preview-filename").html(response.filename);

      //change display file size
      $("#import-payload-preview-meta").html(response.filesize);
    }
  });

  //final formvalidation
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {},
    submitHandler: function (form) {
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}




/**--------------------------------------------------------------------------------------
 * Form validation for cloning a project
 * @description: form validation
 * -------------------------------------------------------------------------------------*/
function NXProjectClone() {
  //create status - form validation
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      project_clientid: "required",
      project_title: "required",
      project_date_start: "required",
    },
    submitHandler: function (form) {
      //ajax request
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}
//task options
$(document).ready(function () {

  $(document).on('change', '#copy_tasks', function () {
    if ($(this).is(':checked')) {
      //show task options
      $("#clone_project_task_options").show();
      //check milestones and disable
      $("#copy_milestones").prop('checked', true);
      $("#copy_milestones").prop('disabled', true);
    } else {
      $("#clone_project_task_options").hide();
      $("#copy_milestones").prop('disabled', false);
      $("#copy_milestones").prop('checked', false);
      $("#copy_tasks_files").prop('checked', false);
      $("#copy_tasks_checklist").prop('checked', false);
    }
  });
});




/**--------------------------------------------------------------------------------------
 * PROJECT - MODAL] 
 * @description: edit projects modal
 * -------------------------------------------------------------------------------------*/
function NXAddEditProjectTemplate() {


  //page section
  var page_section = $("#js-templates-modal-add-edit").attr('data-section');


  //reset editor
  nxTinyMCEBasic();


  /** ----------------------------------------------------------
   * form validation
   * ---------------------------------------------------------*/
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      template_title: "required",
      template_categoryid: "required",
    },
    submitHandler: function (form) {
      //ajax form, so initiate ajax request here
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });


  /** ----------------------------------------------------------
   * sanity - ensure views are checked also
   * ---------------------------------------------------------*/
  $("#clientperm_tasks_create, #clientperm_tasks_collaborate").on("change", function () {
    if ($(this).is(":checked")) {
      $("#clientperm_tasks_view").prop('checked', true);
    }
  });
  $("#clientperm_tasks_view").on("change", function () {
    if (!$(this).is(":checked")) {
      $("#clientperm_tasks_collaborate").prop('checked', false);
      $("#clientperm_tasks_create").prop('checked', false);
    }
  });


  /** ----------------------------------------------------------
   * clean up lead value field - strip symbols and none numric
   * ---------------------------------------------------------*/
  $(document).on('click', '#commonModalSubmitButton', function () {
    if ($('#template_billing_rate').length) {
      var template_billing_rate = $("#template_billing_rate").val();
      $("#template_billing_rate").val(template_billing_rate.replace(/[^0-9.]/g, ""));
    }
  });
}



/**--------------------------------------------------------------------------------------
 * [SELECT ASSIGNED USER]
 * @description: preselect assigned users when the add icon is clicked
 * -------------------------------------------------------------------------------------*/
function NXCardsAssignedSelect() {
  //lop through all users in the assigned users (icons) list
  $(document).find(".card-assigned-listed-user").each(function () {
    //get the assigned users id
    var user_id = $(this).attr('data-user-id');
    //now check this user in the popover list
    var $user = $(".assigned_user_" + user_id);
    $user.prop('checked', true);
  });
}




/** ----------------------------------------------------------
 * [reminder filter panel] - toggle
 * ---------------------------------------------------------*/
NX.toggleReminderPanel = function ($self) {

  //data
  var self = $self || {};
  var panel_id = self.data('target');
  var panel = $("#" + panel_id);
  var overlay = $(".page-wrapper-overlay");

  //set sidepanel name on overlay
  overlay.attr('data-target', panel_id);

  //reset panel
  $("#reminders-side-panel-body").html('');

  //change title
  $("#reminders-side-panel-title").html($self.attr('data-title'));

  //reset form
  panel.find('form').trigger("reset");
  $('.js-select2-basic-search').val(null).trigger('change');

  //toggle the correct side panel
  panel.slideDown(50);

  //show hide side panel
  panel.toggleClass("shw-rside");

  //show/hide overlay
  overlay.toggle();

  //add body scroll bar
  if (overlay.is(":visible")) {
    $('body').addClass('overflow-hidden');
  }
}


/** ----------------------------------------------------------
 * [reminder filter panel] - toggle
 * ---------------------------------------------------------*/
function NXremindersDatePicker() {

  //get preset date
  var preset_date = $("#reminders-datetimepicker").attr('data-preset-date');

  $('#reminders-datetimepicker').datetimepicker({
    format: 'YYYY-MM-DD HH:mm',
    defaultDate: preset_date,
    inline: true,
    sideBySide: true
  });


  $('#reminders-datetimepicker').on('change.datetimepicker', function (event) {
    if (event.date) {
      var formatted_date = event.date.format('YYYY-MM-DD HH:mm');
      $('#reminder_datetime').val(formatted_date);
    } else {
      $('#reminder_datetime').val(''); // Or handle accordingly
    }
  });

}


/** ----------------------------------------------------------
 * close reminder panel
 * ---------------------------------------------------------*/
function NXremindersPanelClose() {

  $("#reminders-side-panel-close-icon").trigger('click');

}




/**--------------------------------------------------------------------------------------
 * [PROJECT DETAILS] 
 * @description: editing client details on client page
 * -------------------------------------------------------------------------------------*/
function NXClientDetails() {

  //editor variables
  NX.client_description = $("#client-description");
  NX.client_description_original_text = $("#client-description").html();
  NX.client_descrition_selector = '#client-description';
  NX.client_description_submit = $("#client-description-submit")
  NX.client_description_edit = $("#client-description-edit")
  NX.client_description_height = $("#client-description").outerHeight();
  NX.client_details_tags_edit = $("#client-details-edit-tags")
  NX.client_details_tags = $("#client-details-tags")

  //edit button clicked
  $(document).on('click', '#client-description-button-edit', function () {
    NX.client_description_edit.hide();
    NX.client_description.addClass('tinymce-textarea');
    NX.client_details_tags.hide();
    NX.client_details_tags_edit.show();
    NX.client_description_submit.show();
    nxTinyMCEExtendedLite(NX.client_description_height, NX.client_descrition_selector);
  });

  //cancel button clicked
  $(document).on('click', '#client-description-button-cancel', function () {
    NX.client_description.removeClass('tinymce-textarea');
    NX.client_description_submit.hide();
    NX.client_description_edit.show();
    NX.client_details_tags.show();
    NX.client_details_tags_edit.hide();
    NX.client_description.html(NX.client_description_original_text);
    tinymce.remove();
  });
  //save button clicked
  $(document).off('click', '#client-description-button-save').on('click', '#client-description-button-save', function () {
    try {
      $("#description").val(tinymce.activeEditor.getContent());
    } catch (err) { }
    //unbind events
    $(this).off("click");
    $("#client-description-button-edit").off("click");
    $("#client-description-button-cancel").off("click");
    //make request
    nxAjaxUxRequest($(this));
    tinymce.remove();
  });

}


/**--------------------------------------------------------------------------------------
 * [SETTINGS - CUSTOM FIELDS - STANDARD FORM - DRAG & DROP]
 * @description: drag and drop for standard form
 * -------------------------------------------------------------------------------------*/
function NXSettingsStandardFormDragDrop() {


  //drag and drop lead positions
  var container = document.getElementById('standard-fields-container');
  var stagesDraggable = dragula([container]);

  //make every board dragable area
  stagesDraggable.on('drag', function (stage) {
    // add 'is-moving' class to element being dragged
    stage.classList.add('is-moving');
  });
  stagesDraggable.on('dragend', function (stage) {
    // remove 'is-moving' class from element after dragging has stopped
    stage.classList.remove('is-moving');
    // add the 'is-moved' class for 600ms then remove it
    window.setTimeout(function () {
      stage.classList.add('is-moved');
      window.setTimeout(function () {
        stage.classList.remove('is-moved');
      }, 600);
    }, 100);

    //update the list
    nxAjaxUxRequest($("#standard-fields-sorting"));

  });
}



/**--------------------------------------------------------------------------------------
 * [SETTINGS - WEBFORMS]
 * @description: Add edit sources
 * -------------------------------------------------------------------------------------*/
function NXSettingsWebformsCreate() {
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      webforms_title: "required"
    },
    submitHandler: function (form) {
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}



/**--------------------------------------------------------------------------------------
 * [COMPOSE EMAIL]
 * @description: form validation
 * -------------------------------------------------------------------------------------*/
function NXWebmailComposeEmail() {
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      email_to: "required",
      email_subject: "required",
      email_from: "required",
    },
    submitHandler: function (form) {
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });




  //file upload
  $("#email_files").dropzone({
    url: "/fileupload",
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },
    init: function () {
      this.on("error", function (file, message, xhr) {

        //is there a message from backend [abort() response]
        if (typeof xhr != 'undefined' && typeof xhr.response != 'undefined') {
          var error = $.parseJSON(xhr.response);
          var message = error.notification.value;
        }

        //any other message
        var message = (typeof message == 'undefined' || message == '' ||
          typeof message == 'object') ? NXLANG.generic_error : message;

        //error message
        NX.notification({
          type: 'error',
          message: message
        });
        //remove the file
        this.removeFile(file);
      });
    },
    success: function (file, response) {
      //get the priview box dom elemen
      var $preview = $(file.previewElement);
      //create a hidden form field for this file
      $preview.append('<input type="hidden" name="attachments[' + response.uniqueid +
        ']"  value="' + response.filename + '">');
    }
  });

  //select template
  $(document).off("select2:select", "#email_template_selector").on("select2:select", "#email_template_selector", function (e) {

    //make ajax request
    nxAjaxUxRequest($(this).find(':selected'));

  });

}

/**--------------------------------------------------------------------------------------
 * [SETTINGS - GENERATE THE ADD BUTTON]
 * @description: Add edit roles
 * -------------------------------------------------------------------------------------*/
function NXSettingsActionsButtons() {
  var $actions = $("#list-page-actions");
  $(".parent-page-actions").html('');
  $actions.prependTo(".parent-page-actions");
}


/**--------------------------------------------------------------------------------------
 * [SETTINGS - WEBMAIL TEMPLATE]
 * @description: Add edit sources
 * -------------------------------------------------------------------------------------*/
function NXSettingsWebmailTemplateCreate() {
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      webmail_template_name: "required",
      webmail_template_body: "required",
    },
    submitHandler: function (form) {
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}


/** ----------------------------------------------------------
 * [notifications side paeel] - toggle
 * ---------------------------------------------------------*/
function NXtoggleNotificationsPanel($self) {


  //data
  var self = $self || {};
  var panel_id = self.data('target');
  var panel = $("#" + panel_id);
  var overlay = $(".page-wrapper-overlay");

  //ative the unread link
  $('.right-sidepanel-menu').removeClass('active');
  $("#right-sidepanel-menu-unread").addClass('active');

  //hide load more


  //set sidepanel name on overlay
  overlay.attr('data-target', panel_id);

  //reset panel
  $("#sidepanel-notifications-events").html('');

  //reset panel
  $("#sidepanel-reminders-container").html('');

  //hide load more button
  $("#events-panel-loadmore-button-container").hide();

  //toggle the correct side panel
  panel.slideDown(50);

  //show hide side panel
  panel.toggleClass("shw-rside");

  //remove body scroll bar
  $('body').addClass('overflow-hidden');

  //show/hide overlay
  overlay.toggle();

  //remove body scroll bar
  if (overlay.is(":hidden")) {
    $('body').removeClass('overflow-hidden');
  }

  //ajax request
  nxAjaxUxRequest($self);
}



/** ----------------------------------------------------------
 * [close all side panels]
 * ---------------------------------------------------------*/
function NXcloseSidePanel($self) {

  var overlay = $(".page-wrapper-overlay");

  //show/hide overlay
  overlay.hide();

  //remove class
  $(".shw-rside").removeClass('shw-rside');

  //add body scroll bar
  $('body').removeClass('overflow-hidden');

}



/**--------------------------------------------------------------------------------------
 * [CLONING A TASK]
 * @description: validate
 * -------------------------------------------------------------------------------------*/
function NXCloneTask() {
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      task_title: "required",
      task_milestoneid: "required",
      project_id: "required",
      task_status: "required",
    },
    submitHandler: function (form) {
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}


/**--------------------------------------------------------------------------------------
 * [CLONING A LEAD]
 * @description: validate
 * -------------------------------------------------------------------------------------*/
function NXCloneLead() {
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      lead_title: "required",
      lead_firstname: "required",
      lead_lastname: "required",
      lead_status: "required",
    },
    submitHandler: function (form) {
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}


/**--------------------------------------------------------------------------------------
 * [SETTINGS - TASK STATUS]
 * @description: form aldation for lead status
 * -------------------------------------------------------------------------------------*/
function NXSettingsTaskStatus() {


  //change task color - update form field
  $(document).on('change', '.taskstatus_colors', function () {
    if (this.checked) {
      $("#taskstatus_color").val($(this).val());
    }
  });


  //create status - form validation
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      taskstatus_title: "required"
    },
    submitHandler: function (form) {
      //set selector color
      $(".taskstatus_colors").each(function () {
        if (this.checked) {
          $("#taskstatus_color").val($(this).val());
        }
      });
      //ajax request
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });

}



/**--------------------------------------------------------------------------------------
 * [SETTINGS - TASK DRAG & DROP]
 * @description: drag and drop for leads
 * -------------------------------------------------------------------------------------*/
function NXSettingsTaskDragDrop() {

  //replace action buttons
  $(".parent-page-actions").html('');
  $("#list-page-actions").prependTo(".parent-page-actions");

  //drag and drop lead positions
  var container = document.getElementById('status-td-container');
  var stagesDraggable = dragula([container]);

  //make every board dragable area
  stagesDraggable.on('drag', function (stage) {
    // add 'is-moving' class to element being dragged
    stage.classList.add('is-moving');
  });
  stagesDraggable.on('dragend', function (stage) {
    // remove 'is-moving' class from element after dragging has stopped
    stage.classList.remove('is-moving');
    // add the 'is-moved' class for 600ms then remove it
    window.setTimeout(function () {
      stage.classList.add('is-moved');
      window.setTimeout(function () {
        stage.classList.remove('is-moved');
      }, 600);
    }, 100);

    //update the list
    nxAjaxUxRequest($("#task-stages"));

  });
}


/**--------------------------------------------------------------------------------------
 * [SETTINGS - TASK DRAG & DROP]
 * @description: drag and drop for leads
 * -------------------------------------------------------------------------------------*/
function NXSettingsPriorityDragDrop() {

  //replace action buttons
  $(".parent-page-actions").html('');
  $("#list-page-actions").prependTo(".parent-page-actions");

  //drag and drop lead positions
  var container = document.getElementById('priority-td-container');
  var stagesDraggable = dragula([container]);

  //make every board dragable area
  stagesDraggable.on('drag', function (stage) {
    // add 'is-moving' class to element being dragged
    stage.classList.add('is-moving');
  });
  stagesDraggable.on('dragend', function (stage) {
    // remove 'is-moving' class from element after dragging has stopped
    stage.classList.remove('is-moving');
    // add the 'is-moved' class for 600ms then remove it
    window.setTimeout(function () {
      stage.classList.add('is-moved');
      window.setTimeout(function () {
        stage.classList.remove('is-moved');
      }, 600);
    }, 100);

    //update the list
    nxAjaxUxRequest($("#task-priorities"));

  });
}


/**--------------------------------------------------------------------------------------
 * [CATEGORy USERS- CREATE AND EDIT]
 * @description: form validation
 * -------------------------------------------------------------------------------------*/
function NXCategoriesUsers() {
  //add category - form validation
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      categoryuser_userid: "required"
    },
    submitHandler: function (form) {
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}

/**--------------------------------------------------------------------------------------
 * [UPDATE PROJECT COVER IMAGE]
 * @description: update image
 * -------------------------------------------------------------------------------------*/
function NXUUpdateConverImage() {

  //upload avatar
  $("#fileupload_cover_image").dropzone({
    url: "/upload-cover-image",
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },
    maxFiles: 1,
    maxFilesize: 2, // MB
    acceptedFiles: 'image/jpeg, image/png',
    thumbnailWidth: null,
    thumbnailHeight: null,
    init: function () {
      this.on("error", function (file, message, xhr) {

        //is there a message from backend [abort() response]
        if (typeof xhr != 'undefined' && typeof xhr.response != 'undefined') {
          var error = $.parseJSON(xhr.response);
          var message = error.notification.value;
        }

        //any other message
        message = (typeof message == 'undefined' || message == '' ||
          typeof message == 'object') ? NXLANG.generic_error : message;

        //error message
        NX.notification({
          type: 'error',
          message: message
        });
        //remove the file
        this.removeFile(file);
      });
    },
    success: function (file, response) {
      //get the priview box dom elemen
      var $preview = $(file.previewElement);
      //create a hidden form field for this file
      $preview.append('<input type="hidden" name="cover_filename"  value="' + response.filename + '">');
      $preview.append('<input type="hidden" name="cover_directory"  value="' + response.uniqueid + '">');
    }
  });


  //validation
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {},
    submitHandler: function (form) {
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}


/**--------------------------------------------------------------------------------------
 * UPLOAD A SINGLE IMAGE
 * -------------------------------------------------------------------------------------*/
function NXUUploadSingleImage() {
  //upload avatar
  $("#upload-single-image").dropzone({
    url: "/upload-general-image",
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },
    maxFiles: 1,
    maxFilesize: 2000, // MB
    acceptedFiles: 'image/jpeg, image/png, image/gif',
    thumbnailWidth: null,
    thumbnailHeight: null,
    init: function () {
      this.on("error", function (file, message, xhr) {

        //is there a message from backend [abort() response]
        if (typeof xhr != 'undefined' && typeof xhr.response != 'undefined') {
          var error = $.parseJSON(xhr.response);
          var message = error.notification.value;
        }

        //any other message
        message = (typeof message == 'undefined' || message == '' ||
          typeof message == 'object') ? NXLANG.generic_error : message;

        //error message
        NX.notification({
          type: 'error',
          message: message
        });
        //remove the file
        this.removeFile(file);
      });
    },
    success: function (file, response) {
      //get the priview box dom elemen
      var $preview = $(file.previewElement);
      //create a hidden form field for this file
      $preview.append('<input type="hidden" name="image_filename"  value="' + response.filename + '">');
      $preview.append('<input type="hidden" name="image_directory"  value="' + response.uniqueid + '">');
    }
  });
}

/**--------------------------------------------------------------------------------------
 * [UPDATE USER THEME]
 * @description: validate
 * -------------------------------------------------------------------------------------*/
function NXUpdateUserTheme() {
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      task_title: "required",
    },
    submitHandler: function (form) {
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}


/**--------------------------------------------------------------------------------------
 * [TASKS - RECURRING] 
 * @blade : tasks\components\modals\recurring-settings.blade.php
 * @description: validation for recurring an task
 * -------------------------------------------------------------------------------------*/
function NXTaskRecurring() {
  //validation
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      task_recurring_next: "required",
      task_recurring_duration: "required",
      task_recurring_period: "required",
      task_recurring_cycles: "required",
    },
    submitHandler: function (form) {
      //ajax form, so initiate ajax request here
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}


/**--------------------------------------------------------------------------------------
 * [PROPOSALS]
 * @description: Add edit roles
 * -------------------------------------------------------------------------------------*/
function NXProposalCreate() {
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      doc_title: "required",
      doc_date_start: "required"
    },
    submitHandler: function (form) {
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}


/**--------------------------------------------------------------------------------------
 * [CONTRACTS]
 * @description: Add edit roles
 * -------------------------------------------------------------------------------------*/
function NXContractCreate() {
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      doc_title: "required",
      doc_date_start: "required"
    },
    submitHandler: function (form) {
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}



/** ----------------------------------------------------------
 *   clear the client users list
 * -----------------------------------------------------------*/
function NXTaskProjectToggleClear($self) {

  //the assigned users dropdown list
  var dropdown_list = $("#" + $self.attr('data-client-assigned-dropdown'));

  //cear & disable projects dropdown
  dropdown_list.prop("disabled", true);
  dropdown_list.empty().trigger("change");
}

/** ----------------------------------------------------------
 * show client users in dropdown list
 * -----------------------------------------------------------*/
function NXTaskProjectToggle(e, $self) {

  //the client's id
  var project_id = e.params.data.id;

  //the projects dropdown list
  var assigned_dropdown = $("#" + $self.attr('data-client-assigned-dropdown'));

  //cear & disable projects dropdown
  assigned_dropdown.prop("disabled", true);
  assigned_dropdown.empty().trigger("change");

  //backend ajax call to get clients projects
  $.ajax({
    type: 'GET',
    url: NX.site_url + "/feed/project-client-users?project_id=" + project_id
  }).then(function (data) {

    //loop through the returned array and create new select option items
    if (data.length > 0) {
      var option = '';
      assigned_dropdown.append(option).trigger('change');
    }
    for (var i = 0; i <= data.length - 1; i++) {
      var option = new Option(data[i].value, data[i].id, false, false);
      assigned_dropdown.append(option).trigger('change');
    }

    //do we have any data
    if (i > 0) {
      assigned_dropdown.prop("disabled", false);
      // manually trigger the `select2:select` event
      assigned_dropdown.trigger({
        type: 'select2:select',
        params: {
          data: data
        }
      });
    }
  });
}


/** ----------------------------------------------------------
 *   initiate the signature pad
 * -----------------------------------------------------------*/
function NXSignDocument() {
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {},
    submitHandler: function (form) {
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}


/** ----------------------------------------------------------
 *   [estimate automation] - update settings
 * -----------------------------------------------------------*/
function NXSettingsEstimatesAutomation() {
  $("#settings-estimates-automation").validate().destroy();
  $("#settings-estimates-automation").validate({
    rules: {
      settings2_estimates_automation_project_title: {
        required: function (element) {
          return $("#settings2_estimates_automation_create_project").is(":checked");
        }
      },
      settings2_estimates_automation_invoice_due_date: {
        required: function (element) {
          return $("#settings2_estimates_automation_create_invoice").is(":checked");
        }
      },
    },
    submitHandler: function (form) {
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}


/** ----------------------------------------------------------
 *   [estimates automation] - edit modal
 * -----------------------------------------------------------*/
function NXEstimateEditAutomation() {
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      settings2_estimates_automation_project_title: {
        required: function (element) {
          return $("#settings2_estimates_automation_create_project").is(":checked");
        }
      },
      settings2_estimates_automation_invoice_due_date: {
        required: function (element) {
          return $("#settings2_estimates_automation_create_invoice").is(":checked");
        }
      },
    },
    submitHandler: function (form) {
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}

/** ----------------------------------------------------------
 *   [projects automation] - update settings
 * -----------------------------------------------------------*/
function NXSettingsProjectsAutomation() {
  $("#settings-projects-automation").validate().destroy();
  $("#settings-projects-automation").validate({
    rules: {},
    submitHandler: function (form) {
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}

/** ----------------------------------------------------------
 *   [projects automation] - edit modal
 * -----------------------------------------------------------*/
function NXProjectsAutomation() {
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {},
    submitHandler: function (form) {
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}


/**--------------------------------------------------------------------------------------
 * @description: add/edit file folders
 * -------------------------------------------------------------------------------------*/
function NXSettingsFileFolder() {
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      filefolder_name: "required",
    },
    submitHandler: function (form) {
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}

/**--------------------------------------------------------------------------------------
 * @description: move files into another folder
 * -------------------------------------------------------------------------------------*/
function NXMoveFiles() {
  //updat the folder files are moving to
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {},
    submitHandler: function (form) {
      var folder_id = $('#moving_filefolder_id').find(':selected').val();
      $("#moving_target_folder_id").val(folder_id);
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}


/**--------------------------------------------------------------------------------------
 * [SETTINGS - ROLES - HOME PAGE]
 * @description: Add edit roles
 * -------------------------------------------------------------------------------------*/
function NXSettingsRolesHomePage() {
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      role_homepage: "required"
    },
    submitHandler: function (form) {
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}

/**--------------------------------------------------------------------------------------
 * [SETTINGS - ROLES - HOME PAGE]
 * @description: Add edit roles
 * -------------------------------------------------------------------------------------*/
function NXCreateProductTask() {
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      product_task_title: "required"
    },
    submitHandler: function (form) {
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}



/**-------------------------------------------------------------
 * ESTIMATES - FILE ATTACHENTS UPLOAD
 * ------------------------------------------------------------*/
//attache the files
if ($("#fileupload_bills").length) {
  $("#fileupload_bills").dropzone({
    url: $("#fileupload_bills").attr('data-upload-url'),
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },
    init: function () {
      this.on("error", function (file, message, xhr) {
        //is there a message from backend [abort() response]
        if (typeof xhr != 'undefined' && typeof xhr.response != 'undefined') {
          var error = $.parseJSON(xhr.response);
          if (typeof error === 'object' && typeof error.notification != 'undefined') {
            var message = error.notification.value;
          } else {
            var message = NXLANG.generic_error;
          }
        }

        //any other message
        var message = (typeof message == 'undefined' || message == '' ||
          typeof message == 'object') ? NXLANG.generic_error : message;

        //error message
        NX.notification({
          type: 'error',
          message: message
        });
        //remove the file
        this.removeFile(file);
      });
    },
    success: function (file, response) {
      //hide the file uploadbox
      $("#bill-file-attachments-dropzone-wrapper").hide();
      //add to the list
      $("#bill-file-attachments-wrapper").prepend(response.attachment);
      //show the files list
      $("#bill-file-attachments-wrapper").show();
      //remove the file
      this.removeFile(file);
    }
  });
}


/**--------------------------------------------------------------------------------------
 * Invoices & Estimate line itemsdrag and drop
 * -------------------------------------------------------------------------------------*/
$(document).ready(function () {
  if ($(".billing-items-container-editing").length) {

    //drag and drop milstone positions
    var container = document.getElementById('billing-items-container');

    var stagesDraggable = dragula([container]);

    //make every board dragable area
    stagesDraggable.on('drag', function (stage) {
      // add 'is-moving' class to element being dragged
      stage.classList.add('is-moving');
    });
    stagesDraggable.on('dragend', function (stage) {
      // remove 'is-moving' class from element after dragging has stopped
      stage.classList.remove('is-moving');
      // add the 'is-moved' class for 600ms then remove it
      window.setTimeout(function () {
        stage.classList.add('is-moved');
        window.setTimeout(function () {
          stage.classList.remove('is-moved');
        }, 600);
      }, 100);
    });
  }
});

/**--------------------------------------------------------------------------------------
 * [SETTINGS - TASK STATUS]
 * @description: form aldation for ticket status
 * -------------------------------------------------------------------------------------*/
function NXSettingsTicketStatus() {


  //change ticket color - update form field
  $(document).on('change', '.ticketstatus_colors', function () {
    if (this.checked) {
      $("#ticketstatus_color").val($(this).val());
    }
  });


  //create status - form validation
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      ticketstatus_title: "required"
    },
    submitHandler: function (form) {
      //set selector color
      $(".ticketstatus_colors").each(function () {
        if (this.checked) {
          $("#ticketstatus_color").val($(this).val());
        }
      });
      //ajax request
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });

}

/**--------------------------------------------------------------------------------------
 * [SETTINGS - TASK STATUS]
 * @description: move the actions buttons
 * -------------------------------------------------------------------------------------*/
function NXSettingsTicketStatuses() {
  //replace action buttons
  $(".parent-page-actions").html('');
  $("#list-page-actions").prependTo(".parent-page-actions");
}


/**--------------------------------------------------------------------------------------
 * [SETTINGS - TICKET STATUS]
 * @description: ticket status additional settings
 * -------------------------------------------------------------------------------------*/
function NXSettingsTicketStatusSettings() {

  //create status - form validation
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {},
    submitHandler: function (form) {
      //ajax request
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}


/**--------------------------------------------------------------------------------------
 * Sorting reports tables
 * -------------------------------------------------------------------------------------*/
function NXSortReportsTables() {
  if ($("#report-results-table").length) {
    $("#report-results-table").tablesorter({
      footer: $(".report-results-table-totals")
    });
  }
}

/**--------------------------------------------------------------------------------------
 * [SETTINGS - TASK STATUS]
 * @description: form aldation for lead status
 * -------------------------------------------------------------------------------------*/
function NXSettingsTaskPriority() {


  //change task color - update form field
  $(document).on('change', '.taskpriority_colors', function () {
    if (this.checked) {
      $("#taskpriority_color").val($(this).val());
    }
  });


  //create status - form validation
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      taskpriority_title: "required"
    },
    submitHandler: function (form) {
      //set selector color
      $(".taskpriority_colors").each(function () {
        if (this.checked) {
          $("#taskpriority_color").val($(this).val());
        }
      });
      //ajax request
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}


/**--------------------------------------------------------------------------------------
 * [PROPOSALS]
 * @description: clone a proposal
 * -------------------------------------------------------------------------------------*/
function NXProposalClone() {
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      doc_title: "required",
      doc_date_start: "required"
    },
    submitHandler: function (form) {
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}


/**--------------------------------------------------------------------------------------
 * [CONTRACTS]
 * @description: clone a contract
 * -------------------------------------------------------------------------------------*/
function NXContractClone() {
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      doc_title: "required",
      doc_date_start: "required"
    },
    submitHandler: function (form) {
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}


/**--------------------------------------------------------------------------------------
 * [UPLOAD MULTIPLE FILES]
 * @description: upload multiple files
 * -------------------------------------------------------------------------------------*/
function NXMultipleFileUpload() {
  //uplaod files
  $("#dropzone_upload_multiple_files").dropzone({
    url: "/fileupload",
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },
    init: function () {
      this.on("error", function (file, message, xhr) {

        //is there a message from backend [abort() response]
        if (typeof xhr != 'undefined' && typeof xhr.response != 'undefined') {
          var error = $.parseJSON(xhr.response);
          if (typeof error === 'object' && typeof error.notification != 'undefined') {
            var message = error.notification.value;
          } else {
            var message = NXLANG.generic_error;
          }
        }

        //system generated errors (e.g. apache)
        if (typeof xhr != 'undefined' && typeof xhr.statusText != 'undefined') {
          //file too large (php.ini settings)
          if (xhr.statusText == 'Payload Too Large') {
            var message = NXLANG.file_too_big;
          }
        }

        //any other message
        var message = (typeof message == 'undefined' || message == '' ||
          typeof message == 'object') ? NXLANG.generic_error : message;

        //error message
        NX.notification({
          type: 'error',
          message: message
        });
        //remove the file
        this.removeFile(file);
      });
    },
    success: function (file, response) {
      //get the priview box dom elemen
      var $preview = $(file.previewElement);
      //create a hidden form field for this file
      $preview.append('<input type="hidden" name="attachments[' + response.uniqueid +
        ']"  value="' + response.filename + '">');
    }
  });
}



/**--------------------------------------------------------------------------------------
 * [CONTRACTS]
 * @description: clone a contract
 * -------------------------------------------------------------------------------------*/
function NXCannedCreate() {

  nxTinyMCEBasic(400, '.tinymce-textarea-canned');

  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {
      canned_title: "required",
      canned_message: "required"
    },
    submitHandler: function (form) {
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}


/**--------------------------------------------------------------------------------------
 * [SEARCH]
 * @description: trigger a search
 * -------------------------------------------------------------------------------------*/
NX.dynamicSearch = function (self, e) {
  nxAjaxUxRequest(self);
}

/** ----------------------------------------------------------
 *   [proposals automation] - edit modal
 * -----------------------------------------------------------*/
function NXProposalEditAutomation() {
  $("#commonModalForm").validate().destroy();
  $("#commonModalForm").validate({
    rules: {},
    submitHandler: function (form) {
      nxAjaxUxRequest($("#commonModalSubmitButton"));
    }
  });
}


/** ----------------------------------------------------------
 *  enabled the codemirror css editor
 * -----------------------------------------------------------*/
function NXCodeMirrorCSSEditor() {
  $(document).ready(function () {
    var cmr_theme = $("#css-editor-textarea").attr('data-crm-theme');
    var editor_theme = (cmr_theme == 'midnight') ? 'darcula' : 'default';
    const editor = CodeMirror.fromTextArea(document.getElementById('css-editor-textarea'), {
      mode: 'css',
      lineNumbers: true,
      theme: editor_theme,
      lineWrapping: false,
      indentWithTabs: true,
      indentUnit: 2,
      tabSize: 2,
      extraKeys: {
        "Tab": "indentMore"
      }
    });
    $("#css-editor-textarea").removeClass('hidden');

    // Monitor changes in the CodeMirror editor and update the textarea
    editor.on('change', function () {
      $('#css-editor-textarea').val(editor.getValue());
    });
  });
}

function NXFeedbackEditModalInit() {
  // Star rating
  const starClick = function () {
    const value = $(this).data('value');
    const container = $(this).closest('.star');
    container.find('i').removeClass('active');
    container.find(`i:lt(${value})`).addClass('active');
    container.data('selected', value);
  };

  const numButtonClick = function () {
    const questionId = $(this).data('question');
    $(`button[data-question="${questionId}"]`).removeClass('btn-primary').addClass('btn-outline-secondary');
    $(this).removeClass('btn-outline-secondary').addClass('btn-primary');
  };

  const submit = function (e) {
    e.preventDefault();
    const results = {};
    questions.forEach(q => {
      if (q.type === "button") {
        const selected = $(`button[data-question="${q.id}"].btn-primary`).data('value');
        results[q.id] = selected || null;
      }
      if (q.type === "star") {
        results[q.id] = $(`.star[data-question="${q.id}"]`).data('selected') || null;
      }
      if (q.type === "select") {
        results[q.id] = $(`select[data-question="${q.id}"]`).val();
      }
    });
    results.comment = $("#comment").val();

    console.log("Submitted Feedback:", results);
    alert("Gracias por tu feedback.");
  }
  $(document).on('click', '.star i', starClick);

  // Toggle button selection
  $(document).on('click', 'button[data-question]', numButtonClick);

  // Submit handler
  $("#feedbackForm").submit(submit);

  return {
    starClick,
    numButtonClick
  };
}

/**
 * **************************** To init the expectation tab **************************************
 *                                   post_run function                                           *
 * *********************************************************************************************** 
 */
function NXExpectationTabInit() {
  console.log('here');
  const expectations = [
    { id: 1, title: "Reduce response times", status: "fulfilled" },
    { id: 2, title: "Improve user experience", status: "fulfilled" },
    { id: 3, title: "Optimize work processes", status: "fulfilled" },
    { id: 4, title: "Increase customer retention", status: "pending" },
    { id: 5, title: "Strengthen communication with clients", status: "pending" },
    { id: 6, title: "Launch HR training", status: "pending" },
    { id: 7, title: "Automate reporting", status: "fulfilled" }
  ];

  let currentPage = 1;
  const itemsPerPage = 5;

  function renderExpectations(data) {
    const list = $("#expectationList").empty();

    if (data.length === 0) {
      list.append('<li class="list-group-item text-muted">No expectations found.</li>');
      return;
    }

    data.forEach((e) => {
      const iconClass = e.status === "fulfilled" ? "fa-check-circle text-info" : "fa-circle text-secondary";
      const badge = e.status === "fulfilled"
        ? '<span class="badge badge-success">Fulfilled</span>'
        : '<span class="badge badge-warning">Pending</span>';

      const row = $(`
        <li class="list-group-item d-flex justify-content-between align-items-center bg-transparent border-0 ps-0">
          <div class="d-flex align-items-center flex-grow-1">
            <i class="fas ${iconClass} mr-3 toggle-check" style="cursor: pointer;" data-id="${e.id}"></i>
            <span class="expect-title">${e.title}</span>
          </div>
          <div class="d-flex align-items-center">
            ${badge}
            <button class="btn btn-sm btn-outline-secondary ml-3 edit-btn" data-id="${e.id}">
              <i class="fas fa-edit"></i>
            </button>
            <button class="btn btn-sm btn-outline-danger ml-2 delete-btn" data-id="${e.id}">
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
        </li>
      `);

      list.append(row);
    });
  }

  function updateProgress(data) {
    const total = data.length;
    const done = data.filter((e) => e.status === "fulfilled").length;
    const percent = total > 0 ? Math.round((done / total) * 100) : 0;
    $("#progressBar").css("width", percent + "%");
    $("#progressText").text(percent + "% Completed");
  }

  function renderPagination(totalItems) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const $pagination = $("#pagination").empty();

    for (let i = 1; i <= totalPages; i++) {
      const active = i === currentPage ? "active" : "";
      $pagination.append(`
        <li class="page-item ${active}">
          <a class="page-link" href="#" data-page="${i}">${i}</a>
        </li>
      `);
    }

    $(".page-link").click(function (e) {
      e.preventDefault();
      currentPage = parseInt($(this).data("page"));
      loadData();
    });
  }

  function loadData() {
    const search = $("#searchInput").val().toLowerCase();
    const filtered = expectations.filter((e) =>
      e.title.toLowerCase().includes(search)
    );

    const start = (currentPage - 1) * itemsPerPage;
    const paginated = filtered.slice(start, start + itemsPerPage);

    renderExpectations(paginated);
    updateProgress(filtered);
    renderPagination(filtered.length);
  }

  // Event listeners
  $(document).ready(function () {
    loadData();

    $("#searchBtn").click(() => {
      currentPage = 1;
      loadData();
    });

    $("#searchInput").keyup(function (e) {
      if (e.key === "Enter") {
        currentPage = 1;
        loadData();
      }
    });

    // Toggle check status
    $("#expectationList").on("click", ".toggle-check", function () {
      const id = parseInt($(this).data("id"));
      const item = expectations.find((e) => e.id === id);
      if (item) {
        item.status = item.status === "fulfilled" ? "pending" : "fulfilled";
        loadData();
      }
    });

    // Delete
    $("#expectationList").on("click", ".delete-btn", function () {
      const id = parseInt($(this).data("id"));
      const index = expectations.findIndex((e) => e.id === id);
      if (index !== -1) {
        if (confirm("Are you sure you want to delete this expectation?")) {
          expectations.splice(index, 1);
          loadData();
        }
      }
    });

    // Edit
    $("#expectationList").on("click", ".edit-btn", function () {
      const id = parseInt($(this).data("id"));
      const item = expectations.find((e) => e.id === id);
      if (item) {
        const newTitle = prompt("Edit expectation title:", item.title);
        if (newTitle) {
          item.title = newTitle;
          loadData();
        }
      }
    });

    // Add new expectation
    $("#addBtn").click(function () {
      const title = prompt("Enter new expectation:");
      if (title) {
        const newId = Math.max(...expectations.map(e => e.id)) + 1;
        expectations.push({ id: newId, title, status: "pending" });
        loadData();
      }
    });
  });
}

function NXAddEditExpections() {

  const handleSubmit = function (url, data, method) {
    return $.ajax({
      url,
      type: method,
      headers: {
        'X-CSRF-TOKEN': NX.csrf_token
      },
      data,
    });
  }

  $('#expectationForm').on('submit', function (e) {
    e.preventDefault();
    const form = this;
    const url = $(form).data('action-url');
    const method = $(form).data('method');
    if (form.checkValidity() === false) {
      e.stopPropagation();
      $(form).addClass('was-validated');
      return;
    }

    // Form is valid - you can handle AJAX submit here
    const data = {
      title: $('#title').val().trim(),
      content: $('#content').val().trim(),
      weight: parseFloat($('#weight').val()),
      due_date: $('#due_date').val(),
      status: $('#status').val(),
    };

    console.log('Form data to submit:', data);
    handleSubmit(url, data, method)
      .then(response => {
        console.log(response);
        const currentPage = $('.page-item.active span.page-link').text();
        NXExpectationList(currentPage);
        NX.notification({
          type: 'success',
          message: response.message
        });
        $("#basicModal").modal("hide");
      })
      .catch(err => {
        NX.notification({
          type: 'error',
          message: err.message
        });
        console.log('create expectation error: ', err);
      })

    // Example: Close modal and reset form after submit
    $('#addExpectationModal').modal('hide');
    form.reset();
    $(form).removeClass('was-validated');

    // TODO: Replace with actual AJAX call to your backend API
    // $.post('/api/expectations', data).done(response => { ... });
  });

  // Optional: reset form when modal hides
  $('#addExpectationModal').on('hidden.bs.modal', function () {
    const form = $('#expectationForm')[0];
    form.reset();
    $(form).removeClass('was-validated');
  });
}

function NXExpectationList(page = 1) {
  const baseUrl = $("#expectationSearchBtn").data('action-url');
  console.log('baseUrl: ', baseUrl);
  function loadExpectations(page = 1) {
    const search = $('#searchInput').val();

    $.ajax({
      url: baseUrl,
      type: "GET",
      data: {
        page: page,
        search: search,
        ajax: 1
      },
      success: function (response) {
        $('#expectationStatsContainer').html(response.statsHtml);
        $('#expectationListContainer').html(response.listHtml);
        listEventInit();
      },
      error: function () {
        alert("Failed to load expectations.");
      }
    });
  }

  // Initial load
  loadExpectations(page);

  // Search click
  $('#expectationSearchBtn').click(function () {
    loadExpectations(1);
  });

  // Enter key for search
  $('#searchInput').on('keypress', function (e) {
    if (e.which === 13) {
      loadExpectations(1);
    }
  });

  function listEventInit() {
    // Toggle check status
    $("#expectationList").on('click', '.toggle-status', function () {
      const id = $(this).data('id');
      const url = $(this).data('action-url');
      const $icon = $(this).find('i');

      $.ajax({
        url: url,
        type: 'PUT',
        headers: {
          'X-CSRF-TOKEN': NX.csrf_token
        },
        success: function (response) {
          // Update icon
          if (response.status === 'fulfilled') {
            $icon.removeClass('far fa-circle text-secondary')
              .addClass('fas fa-check-circle text-info');
          } else {
            $icon.removeClass('fas fa-check-circle text-info')
              .addClass('far fa-circle text-secondary');
          }
          NX.notification({
            type: 'success',
            message: response.message
          })
          // Reload list and stats (optional, if you want to refresh everything)
          const currentPage = $('.page-item.active span.page-link').text();
          loadExpectations(currentPage);
        },
        error: function (err) {
          NX.notification({
            type: 'error',
            message: err.message
          });
          console.log(err);
        }
      });
    });


  }

  // Pagination click (delegated)
  $(document).on('click', '.pagination a', function (e) {
    e.preventDefault();
    const page = $(this).attr('href').split('page=')[1];
    loadExpectations(page);
  });
}

function NXDeleteExpectationEventInit() {
  $(document).on('click', '#confirmDeleteBtn', function (e) {
    const url = $(this).data('action-url');
    const id = $(this).data('id');

    $.ajax({
      url,
      type: 'DELETE',
      headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      },
      success: function (response) {
        $('#basicModal').modal('hide');
        const currentPage = $('.page-item.active span.page-link').text();
        NXExpectationList(currentPage);
        NX.notification({
          type: 'success',
          message: response.message
        });
      },
      error: function (err) {
        NX.notification({
          type: 'error',
          message: err.message
        });
        console.log('delete item error: ', err);
      }
    })
  });
}

function NXClientAI() {
  
}
