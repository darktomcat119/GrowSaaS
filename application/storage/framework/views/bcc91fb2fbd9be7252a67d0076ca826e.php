<!-- right-sidebar -->
<div class="right-sidebar" id="sidepanel-filter-tickets">
    <form>
        <div class="slimscrollright">
            <!--title-->
            <div class="rpanel-title">
                <i class="icon-Filter-2"></i><?php echo e(cleanLang(__('lang.filter_tickets'))); ?>

                <span>
                    <i class="ti-close js-close-side-panels" data-target="sidepanel-filter-tickets"></i>
                </span>
            </div>
            <!--title-->
            <!--body-->
            <div class="r-panel-body">

                <!--company name-->
                <div class="filter-block">
                    <div class="title">
                        <?php echo e(cleanLang(__('lang.client_name'))); ?>

                    </div>
                    <div class="fields">
                        <div class="row">
                            <div class="col-md-12">
                                <select name="filter_ticket_clientid" id="filter_ticket_clientid"
                                    class="clients_and_projects_toggle form-control form-control-sm js-select2-basic-search select2-hidden-accessible"
                                    data-projects-dropdown="filter_ticket_projectid"
                                    data-feed-request-type="filter_tickets"
                                    data-ajax--url="<?php echo e(url('/')); ?>/feed/company_names"></select>
                            </div>
                        </div>
                    </div>
                </div>

                <!--project-->
                <div class="filter-block">
                    <div class="title">
                        <?php echo e(cleanLang(__('lang.project'))); ?>

                    </div>
                    <div class="fields">
                        <div class="row">
                            <div class="col-md-12">
                                <select
                                    class="select2-basic form-control form-control-sm dynamic_filter_ticket_projectid"
                                    id="filter_ticket_projectid" name="filter_ticket_projectid" disabled>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <!--category-->
                <div class="filter-block">
                    <div class="title">
                        <?php echo e(cleanLang(__('lang.category'))); ?>

                    </div>
                    <div class="fields">
                        <div class="row">
                            <div class="col-md-12">
                                <select name="filter_ticket_categoryid" id="filter_ticket_categoryid"
                                    class="form-control form-control-sm select2-basic select2-multiple select2-hidden-accessible"
                                    multiple="multiple" tabindex="-1" aria-hidden="true">
                                    <?php $__currentLoopData = $categories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $category): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                    <option value="<?php echo e($category->category_id); ?>">
                                        <?php echo e($category->category_name); ?></option>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>


                <!--date-->
                <div class="filter-block">
                    <div class="title">
                        <?php echo e(cleanLang(__('lang.date'))); ?>

                    </div>
                    <div class="fields">
                        <div class="row">
                            <div class="col-md-6">
                                <input type="text" name="filter_ticket_created_start"
                                    class="form-control form-control-sm pickadate" autocomplete="off"
                                    placeholder="Start">
                                <input class="mysql-date" type="hidden" name="filter_ticket_created_start"
                                    id="filter_ticket_created_start" value="">
                            </div>
                            <div class="col-md-6">
                                <input type="text" name="filter_ticket_created_end"
                                    class="form-control form-control-sm pickadate" autocomplete="off" placeholder="End">
                                <input class="mysql-date" type="hidden" name="filter_ticket_created_end"
                                    id="filter_ticket_created_end" value="">
                            </div>
                        </div>
                    </div>
                </div>


                <!--priority-->
                <div class="filter-block">
                    <div class="title">
                        <?php echo e(cleanLang(__('lang.priority'))); ?>

                    </div>
                    <div class="fields">
                        <div class="row">
                            <div class="col-md-12">
                                <select class="select2-basic form-control form-control-sm" id="filter_ticket_priority"
                                    name="filter_ticket_priority" multiple="multiple" tabindex="-1" aria-hidden="true">
                                    <option value=""></option>
                                    <?php $__currentLoopData = config('settings.ticket_priority'); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $value): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                    <option value="<?php echo e($key); ?>"><?php echo e(runtimeLang($key)); ?></option>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <!--status-->
                <div class="filter-block">
                    <div class="title">
                        <?php echo e(cleanLang(__('lang.status'))); ?>

                    </div>
                    <div class="fields">
                        <div class="row">
                            <div class="col-md-12">
                                <select class="select2-basic form-control form-control-sm" id="filter_ticket_status"
                                    name="filter_ticket_status" multiple="multiple" tabindex="-1" aria-hidden="true">
                                    <option value=""></option>
                                    <?php $__currentLoopData = $statuses; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $status): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                    <option value="<?php echo e($status->ticketstatus_id); ?>"
                                        <?php echo e(runtimePreselected($ticket->ticket_status ?? '', $status->ticketstatus_id)); ?>><?php echo e(runtimeLang($status->ticketstatus_title)); ?></option>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>


                <!--custom fields-->
                <?php echo $__env->make('misc.customfields-filters', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?>

                <!--remember filters-->
                <div class="modal-selector m-t-20">

                    <div class="form-group form-group-checkbox row">
                        <div class="col-12 p-t-5">
                            <input type="checkbox" id="show_archive_tickets" name="show_archive_tickets" class="filled-in chk-col-light-blue" >
                            <label class="p-l-30" for="show_archive_tickets"><?php echo app('translator')->get('lang.show_archive_tickets'); ?></label>
                        </div>
                    </div>


                    
                    <div class="form-group form-group-checkbox row">
                        <div class="col-12 p-t-5">
                            <input type="checkbox" id="filter_remember" name="filter_remember" class="filled-in chk-col-light-blue" 
                            <?php echo e(runtimePrechecked(auth()->user()->remember_filters_tickets_status ?? '')); ?>>
                            <label class="p-l-30" for="filter_remember"><?php echo app('translator')->get('lang.remember_filter'); ?> <span
                                    class="align-middle text-info font-16" data-toggle="tooltip"
                                    title="<?php echo app('translator')->get('lang.remember_filter_info'); ?>" data-placement="top"><i
                                        class="ti-info-alt"></i></span></label>
                        </div>
                    </div>
                </div>

                <!--indicate this was a filter-->
                <input type="hidden" name="search_type" value="filter">


                <!--buttons-->
                <div class="buttons-block">
                    <button type="button" name="foo1"
                        class="btn btn-rounded-x btn-secondary js-reset-filter-side-panel"><?php echo e(cleanLang(__('lang.reset'))); ?></button>
                    <input type="hidden" name="action" value="search">
                    <input type="hidden" name="source" value="<?php echo e($page['source_for_filter_panels'] ?? ''); ?>">
                    <button type="button" class="btn btn-rounded-x btn-danger js-ajax-ux-request apply-filter-button"
                        data-url="<?php echo e(urlResource('/tickets/search?')); ?>" data-type="form"
                        data-ajax-type="GET"><?php echo e(cleanLang(__('lang.apply_filter'))); ?></button>
                </div>


            </div>
            <!--body-->
        </div>
    </form>
</div>
<!--sidebar--><?php /**PATH D:\my_apache\application\resources\views/pages/tickets/components/misc/filter-tickets.blade.php ENDPATH**/ ?>