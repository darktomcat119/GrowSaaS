<!DOCTYPE html>
<html lang="en" class="logged-out <?php echo e(config('visibility.page_rendering')); ?> <?php echo e(config('active_theme')); ?>">

<!--html header-->
<?php echo $__env->make('layout.header', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
<!--html header-->

<body class="<?php echo e($page['page'] ?? ''); ?>">
    <!--preloader-->
    <?php if(config('visibility.page_rendering') == '' || config('visibility.page_rendering') != 'print-page'): ?>
    <div class="preloader">
        <div class="loader">
            <div class="loader-loading"></div>
        </div>
    </div>
    <?php endif; ?>
    <!--preloader-->

    <!--main content-->
    <div id="main-wrapper">
        <?php echo $__env->yieldContent('content'); ?>
    </div>

    <!--common modals-->
    <?php echo $__env->make('modals.actions-modal-wrapper', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
    <?php echo $__env->make('modals.common-modal-wrapper', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
</body>

<?php echo $__env->make('layout.footerjs', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
<!--js automations-->
<?php echo $__env->make('layout.automationjs', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
<!--[note: no sanitizing required] for this trusted content, which is added by the admin-->
<?php echo config('system.settings_theme_body'); ?>


<!--[PRINTING]-->
<?php if(config('visibility.page_rendering') == 'print-page'): ?>
<script src="public/js/dynamic/print.js?v=<?php echo e(config('system.versioning')); ?>"></script>
<?php endif; ?>

</html><?php /**PATH D:\Grow_SaaS\application\resources\views/layout/wrapperplain.blade.php ENDPATH**/ ?>