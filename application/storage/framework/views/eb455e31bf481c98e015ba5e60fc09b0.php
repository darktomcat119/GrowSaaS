<!DOCTYPE html>
<html lang="en">

<?php echo $__env->make('frontend.layout.header', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>

<body class="account">

    <!--overlay-->
    <div class="page-wrapper-overlay hidden" data-target="">
        <div class="preloader">
            <div class="loader">
                <div class="loader-loading"></div>
            </div>
        </div>
    </div>
    <!--overlay-->

    <!--LOGO & MENU-->
    <?php if(config('system.settings_frontend_status') == 'enabled'): ?>
    <?php echo $__env->make('frontend.layout.menu', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
    <?php else: ?>
    <header class="heading">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="heading_mobile">
                        <a href="javascript:void(0);" class="heading_logo">
                            <img src="<?php echo e(runtimeLogoFrontEnd()); ?>" alt="">
                        </a>
                        <div class="heading_mobile_thum"></div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <?php endif; ?>


    <!--main section-->
    <div class="row signup">

        <div class="col-lg-6">
            <div class="x-splash-image">
                <img src="public/themes/frontend/assets/images/signup-splash.png">
            </div>
        </div>
        <div class="col-lg-6">

            <?php echo $__env->make('frontend.signup.form', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>

        </div>

    </div>
    
    <?php echo $__env->make('frontend.signup.terms', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
    <?php echo $__env->make('frontend.layout.footerjs', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>

</body>

</html><?php /**PATH D:\Grow_SaaS\application\resources\views/frontend/signup/page.blade.php ENDPATH**/ ?>