<div class="boards count-<?php echo e(@count($tasks ?? [])); ?>" id="tasks-view-wrapper">
    <!--each board-->
    <?php $__currentLoopData = $boards; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $board): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
    <!--board-->
    <?php echo $__env->make('pages.tasks.components.kanban.board', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
</div>
<!--ajax element-->
<span class="hidden" data-url=""></span>

<!--filter-->
<?php if(auth()->user()->is_team): ?>
<?php echo $__env->make('pages.tasks.components.misc.filter-tasks', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
<?php endif; ?>
<!--filter-->

<!--export-->
<?php if(config('visibility.list_page_actions_exporting')): ?>
<?php echo $__env->make('pages.export.tasks.export', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>
<?php endif; ?><?php /**PATH D:\my_apache\application\resources\views/pages/tasks/components/kanban/kanban.blade.php ENDPATH**/ ?>