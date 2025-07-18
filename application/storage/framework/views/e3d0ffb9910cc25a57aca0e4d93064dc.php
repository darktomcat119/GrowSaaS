<div class="card">
    <div class="card-body">
        <div class="row">
            <div class="col-12">
                <h3 id="stats-widget-value-1"><?php echo $stats[0]['value'] ?? ''; ?></h3>
                <?php if(config('settings.extended_stats_panel')): ?>
                <h6 class="card-subtitle m-b-5" id="stats-widget-title-1"><?php echo e($stats[0]['title'] ?? ''); ?>

                </h6>
                <div class="card-subtitle"><small><?php echo e($stats[0]['subtitle'] ?? ''); ?></small></div>
                <?php else: ?>
                <h6 class="card-subtitle" id="stats-widget-title-1"><?php echo e($stats[0]['title'] ?? ''); ?></h6>
                <?php endif; ?>
            </div>
            <div class="col-12">
                <div class="progress">
                    <div class="progress-bar <?php echo e($stats[0]['color'] ?? ''); ?> h-px-4 w-100" id="stats-widget-percentage-1"
                        role="progressbar"
                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Column -->
<!-- Column -->
<div class="card">
    <div class="card-body">
        <div class="row">
            <div class="col-12">
                <h3 id="stats-widget-value-1"><?php echo $stats[1]['value'] ?? ''; ?></h3>
                <?php if(config('settings.extended_stats_panel')): ?>
                <h6 class="card-subtitle  m-b-5" id="stats-widget-title-2"><?php echo e($stats[1]['title'] ?? ''); ?>

                </h6>
                <div class="card-subtitle"><small><?php echo e($stats[1]['subtitle'] ?? ''); ?></small></div>
                <?php else: ?>
                <h6 class="card-subtitle" id="stats-widget-title-2"><?php echo e($stats[1]['title'] ?? ''); ?></h6>
                <?php endif; ?>
            </div>
            <div class="col-12">
                <div class="progress">
                    <div class="progress-bar <?php echo e($stats[1]['color'] ?? ''); ?> h-px-4  w-100" id="stats-widget-percentage-2"
                        role="progressbar"
                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Column -->
<!-- Column -->
<div class="card">
    <div class="card-body">
        <div class="row">
            <div class="col-12">
                <h3 id="stats-widget-value-1"><?php echo $stats[2]['value'] ?? ''; ?></h3>
                <?php if(config('settings.extended_stats_panel')): ?>
                <h6 class="card-subtitle m-b-5" id="stats-widget-title-3"><?php echo e($stats[2]['title'] ?? ''); ?>

                </h6>
                <div class="card-subtitle"><small><?php echo e($stats[2]['subtitle'] ?? ''); ?></small></div>
                <?php else: ?>
                <h6 class="card-subtitle" id="stats-widget-title-3"><?php echo e($stats[2]['title'] ?? ''); ?></h6>
                <?php endif; ?>
            </div>
            <div class="col-12">
                <div class="progress">
                    <div class="progress-bar <?php echo e($stats[2]['color'] ?? ''); ?> h-px-4  w-100" id="stats-widget-percentage-3"
                        role="progressbar"
                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Column -->
<!-- Column -->
<div class="card">
    <div class="card-body">
        <div class="row">
            <div class="col-12">
                <h3 id="stats-widget-value-1"><?php echo $stats[3]['value'] ?? ''; ?></h3>
                <?php if(config('settings.extended_stats_panel')): ?>
                <h6 class="card-subtitle m-b-5" id="stats-widget-title-4"><?php echo e($stats[3]['title'] ?? ''); ?>

                </h6>
                <div class="card-subtitle"><small><?php echo e($stats[3]['subtitle'] ?? ''); ?></small></div>
                <?php else: ?>
                <h6 class="card-subtitle" id="stats-widget-title-4"><?php echo e($stats[3]['title'] ?? ''); ?></h6>
                <?php endif; ?>
            </div>
            <div class="col-12">
                <div class="progress">
                    <div class="progress-bar <?php echo e($stats[3]['color'] ?? ''); ?>  h-px-4  w-100" id="stats-widget-percentage-4"
                        role="progressbar"
                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>
    </div>
</div><?php /**PATH D:\Grow_SaaS\application\resources\views/misc/list-pages-stats-content.blade.php ENDPATH**/ ?>