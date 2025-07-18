<!--modal-->
<div class="modal actions-modal" role="dialog" aria-labelledby="foo" id="actionsModal" <?php echo clean(runtimeAllowCloseModalOptions()); ?>>
    <div class="modal-dialog">
        <form action="" method="post" id="actionsModalForm" class="form-horizontal">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="actionsModalTitle"></h4>
                    <button type="button" class="close" data-dismiss="modal">
                        <i class="ti-close"></i>
                    </button>
                </div>
                <div class="modal-body" id="actionsModalBody">
                    <!--dynamic content here-->

                </div>
                <div class="modal-footer" id="actionsModalFooter">
                    <button type="button" class="btn btn-rounded-x btn-secondary waves-effect text-left" data-dismiss="modal"><?php echo e(cleanLang(__('lang.close'))); ?></button>
                    <button type="submit" id="actionsModalButton" class="btn btn-rounded-x btn-danger waves-effect text-left js-ajax-ux-request" 
                            data-url=""
                            data-loading-target="actionsModalBody"
                            data-ajax-type=""
                            data-on-start-submit-button="disable"><?php echo e(cleanLang(__('lang.submit'))); ?></button>
                </div>
            </div>
        </form>
    </div>
</div>

<!--notes: see events.js for deails--><?php /**PATH D:\Grow_SaaS\application\resources\views/modals/actions-modal-wrapper.blade.php ENDPATH**/ ?>