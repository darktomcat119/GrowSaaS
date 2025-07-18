<div class="row">
    <div class="col-lg-12">

        <!--comment-->
        <div class="form-group row">
            <div class="col-sm-12">
                <textarea class="form-control form-control-sm tinymce-textarea" rows="5" name="ticketreply_text"
                    id="ticketreply_text"></textarea>
            </div>
        </div>

        <!--CANNED MESSAGES-->
        <?php if(auth()->user()->is_team && config('system.settings2_tickets_replying_interface') == 'inline'): ?>
        <button type="button"
            class="btn btn-default btn-sm waves-effect waves-dark js-toggle-side-panel ticket-add-canned m-b-20"
            id="ticket-add-canned" data-target="sidepanel-canned-messages">
            <i class="sl-icon-speech"></i>
            <?php echo app('translator')->get('lang.canned_messages'); ?>
        </button>
        <?php endif; ?>

        <!--fileupload-->
        <div class="form-group row">
            <div class="col-12">
                <div class="dropzone dz-clickable" id="fileupload_ticket_reply">
                    <div class="dz-default dz-message">
                        <i class="icon-Upload-toCloud"></i>
                        <span><?php echo e(cleanLang(__('lang.drag_drop_file'))); ?></span>
                    </div>
                </div>
            </div>
        </div>
        <!--fileupload-->

        <!--ticketid-->
        <input type="hidden" name="ticketreply_ticketid" value="<?php echo e($ticket->ticket_id); ?>">

        <!--reply type-->
        <input type="hidden" class="ticketreply_type" id="ticketreply_type" name="ticketreply_type" value="reply">
    </div>
</div><?php /**PATH D:\my_apache\application\resources\views/pages/ticket/components/modals/reply.blade.php ENDPATH**/ ?>