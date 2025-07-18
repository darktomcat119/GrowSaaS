<!-- right-sidebar -->
<div class="right-sidebar" id="table-config-projects">
    <form id="table-config-form">
        <div class="slimscrollright">
            <div class="rpanel-title">
                <i class="icon-Filter-2"></i><?php echo e(cleanLang(__('lang.table_settings'))); ?>

                <span>
                    <i class="ti-close js-close-side-panels" data-target="table-config-projects"></i>
                </span>
            </div>

            <!--set ajax url on parent container-->
            <div class="r-panel-body table-config-ajax" data-url="<?php echo e(url('preferences/tables')); ?>" data-type="form"
                data-form-id="table-config-form" data-ajax-type="post" data-progress-bar="hidden">

                <!--tableconfig_column_1 [project_title]-->
                <div class="p-b-5">
                    <label class="custom-control custom-checkbox table-config-checkbox-container">
                        <input name="tableconfig_column_1" type="checkbox"
                            class="custom-control-input table-config-checkbox cursor-pointer"
                            <?php echo e(runtimePrechecked(config('table.tableconfig_column_1'))); ?>>
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description"><?php echo app('translator')->get('lang.id'); ?></span>
                    </label>
                </div>


                <!--tableconfig_column_2 [project_title]-->
                <div class="p-b-5">
                    <label class="custom-control custom-checkbox table-config-checkbox-container">
                        <input name="tableconfig_column_2" type="checkbox"
                            class="custom-control-input table-config-checkbox cursor-pointer"
                            <?php echo e(runtimePrechecked(config('table.tableconfig_column_2'))); ?>>
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description"><?php echo app('translator')->get('lang.title'); ?></span>
                    </label>
                </div>


                <!--tableconfig_column_3 [client_company_name]-->
                <div class="p-b-5">
                    <label class="custom-control custom-checkbox table-config-checkbox-container">
                        <input name="tableconfig_column_3" type="checkbox"
                            class="custom-control-input table-config-checkbox cursor-pointer"
                            <?php echo e(runtimePrechecked(config('table.tableconfig_column_3'))); ?>>
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description"><?php echo app('translator')->get('lang.client'); ?></span>
                    </label>
                </div>


                <!--tableconfig_column_4 [project_date_start]-->
                <div class="p-b-5">
                    <label class="custom-control custom-checkbox table-config-checkbox-container">
                        <input name="tableconfig_column_4" type="checkbox"
                            class="custom-control-input table-config-checkbox cursor-pointer"
                            <?php echo e(runtimePrechecked(config('table.tableconfig_column_4'))); ?>>
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description"><?php echo app('translator')->get('lang.start_date'); ?></span>
                    </label>
                </div>


                <!--tableconfig_column_5 [project_date_due]-->
                <div class="p-b-5">
                    <label class="custom-control custom-checkbox table-config-checkbox-container">
                        <input name="tableconfig_column_5" type="checkbox"
                            class="custom-control-input table-config-checkbox cursor-pointer"
                            <?php echo e(runtimePrechecked(config('table.tableconfig_column_5'))); ?>>
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description"><?php echo app('translator')->get('lang.due_date'); ?></span>
                    </label>
                </div>


                <!--tableconfig_column_6 [tags]-->
                <div class="p-b-5">
                    <label class="custom-control custom-checkbox table-config-checkbox-container">
                        <input name="tableconfig_column_6" type="checkbox"
                            class="custom-control-input table-config-checkbox cursor-pointer"
                            <?php echo e(runtimePrechecked(config('table.tableconfig_column_6'))); ?>>
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description"><?php echo app('translator')->get('lang.tags'); ?></span>
                    </label>
                </div>


                <!--tableconfig_column_7 [project_progress]-->
                <div class="p-b-5">
                    <label class="custom-control custom-checkbox table-config-checkbox-container">
                        <input name="tableconfig_column_7" type="checkbox"
                            class="custom-control-input table-config-checkbox cursor-pointer"
                            <?php echo e(runtimePrechecked(config('table.tableconfig_column_7'))); ?>>
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description"><?php echo app('translator')->get('lang.progress'); ?></span>
                    </label>
                </div>


                <!--tableconfig_column_8 [count_pending_tasks]-->
                <div class="p-b-5">
                    <label class="custom-control custom-checkbox table-config-checkbox-container">
                        <input name="tableconfig_column_8" type="checkbox"
                            class="custom-control-input table-config-checkbox cursor-pointer"
                            <?php echo e(runtimePrechecked(config('table.tableconfig_column_8'))); ?>>
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description"><?php echo app('translator')->get('lang.pending_tasks'); ?></span>
                    </label>
                </div>


                <!--tableconfig_column_9 [count_completed_tasks]-->
                <div class="p-b-5">
                    <label class="custom-control custom-checkbox table-config-checkbox-container">
                        <input name="tableconfig_column_9" type="checkbox"
                            class="custom-control-input table-config-checkbox cursor-pointer"
                            <?php echo e(runtimePrechecked(config('table.tableconfig_column_9'))); ?>>
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description"><?php echo app('translator')->get('lang.completed_tasks'); ?></span>
                    </label>
                </div>


                <!--tableconfig_column_10 [sum_invoices_all]-->
                <?php if(config('visibility.role_invoices')): ?>
                <div class="p-b-5">
                    <label class="custom-control custom-checkbox table-config-checkbox-container">
                        <input name="tableconfig_column_10" type="checkbox"
                            class="custom-control-input table-config-checkbox cursor-pointer"
                            <?php echo e(runtimePrechecked(config('table.tableconfig_column_10'))); ?>>
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description"><?php echo app('translator')->get('lang.invoices'); ?></span>
                    </label>
                </div>
                <?php endif; ?>

                <!--tableconfig_column_11 [sum_all_payments]-->
                <?php if(config('visibility.role_payments')): ?>
                <div class="p-b-5">
                    <label class="custom-control custom-checkbox table-config-checkbox-container">
                        <input name="tableconfig_column_11" type="checkbox"
                            class="custom-control-input table-config-checkbox cursor-pointer"
                            <?php echo e(runtimePrechecked(config('table.tableconfig_column_11'))); ?>>
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description"><?php echo app('translator')->get('lang.payments'); ?></span>
                    </label>
                </div>
                <?php endif; ?>


                <!--tableconfig_column_12 [sum_outstanding_balance]-->
                <?php if(config('visibility.role_invoices')): ?>
                <div class="p-b-5">
                    <label class="custom-control custom-checkbox table-config-checkbox-container">
                        <input name="tableconfig_column_12" type="checkbox"
                            class="custom-control-input table-config-checkbox cursor-pointer"
                            <?php echo e(runtimePrechecked(config('table.tableconfig_column_12'))); ?>>
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description"><?php echo app('translator')->get('lang.unpaid_invoices'); ?></span>
                    </label>
                </div>
                <?php endif; ?>


                <!--tableconfig_column_13 [project_billing_type]-->
                <?php if(config('visibility.role_invoices')): ?>
                <div class="p-b-5">
                    <label class="custom-control custom-checkbox table-config-checkbox-container">
                        <input name="tableconfig_column_13" type="checkbox"
                            class="custom-control-input table-config-checkbox cursor-pointer"
                            <?php echo e(runtimePrechecked(config('table.tableconfig_column_13'))); ?>>
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description"><?php echo app('translator')->get('lang.billing'); ?></span>
                    </label>
                </div>
                <?php endif; ?>


                <!--tableconfig_column_14 [project_billing_estimated_hours]-->
                <?php if(config('visibility.role_estimates')): ?>
                <div class="p-b-5">
                    <label class="custom-control custom-checkbox table-config-checkbox-container">
                        <input name="tableconfig_column_14" type="checkbox"
                            class="custom-control-input table-config-checkbox cursor-pointer"
                            <?php echo e(runtimePrechecked(config('table.tableconfig_column_14'))); ?>>
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description"><?php echo app('translator')->get('lang.estimated_hours'); ?></span>
                    </label>
                </div>
                <?php endif; ?>


                <!--tableconfig_column_15 [project_billing_costs_estimate]-->
                <?php if(config('visibility.role_estimates')): ?>
                <div class="p-b-5">
                    <label class="custom-control custom-checkbox table-config-checkbox-container">
                        <input name="tableconfig_column_15" type="checkbox"
                            class="custom-control-input table-config-checkbox cursor-pointer"
                            <?php echo e(runtimePrechecked(config('table.tableconfig_column_15'))); ?>>
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description"><?php echo app('translator')->get('lang.estimated_cost'); ?></span>
                    </label>
                </div>
                <?php endif; ?>


                <!--tableconfig_column_16 [sum_hours]-->
                <?php if(config('visibility.role_timesheets')): ?>
                <div class="p-b-5">
                    <label class="custom-control custom-checkbox table-config-checkbox-container">
                        <input name="tableconfig_column_16" type="checkbox"
                            class="custom-control-input table-config-checkbox cursor-pointer"
                            <?php echo e(runtimePrechecked(config('table.tableconfig_column_16'))); ?>>
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description"><?php echo app('translator')->get('lang.hours_worked'); ?></span>
                    </label>
                </div>
                <?php endif; ?>


                <!--tableconfig_column_17 [sum_expenses]-->
                <?php if(config('visibility.role_expenses')): ?>
                <div class="p-b-5">
                    <label class="custom-control custom-checkbox table-config-checkbox-container">
                        <input name="tableconfig_column_17" type="checkbox"
                            class="custom-control-input table-config-checkbox cursor-pointer"
                            <?php echo e(runtimePrechecked(config('table.tableconfig_column_17'))); ?>>
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description"><?php echo app('translator')->get('lang.expenses'); ?></span>
                    </label>
                </div>
                <?php endif; ?>


                <!--tableconfig_column_18 [count_files]-->
                <div class="p-b-5">
                    <label class="custom-control custom-checkbox table-config-checkbox-container">
                        <input name="tableconfig_column_18" type="checkbox"
                            class="custom-control-input table-config-checkbox cursor-pointer"
                            <?php echo e(runtimePrechecked(config('table.tableconfig_column_18'))); ?>>
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description"><?php echo app('translator')->get('lang.files'); ?></span>
                    </label>
                </div>


                <!--tableconfig_column_19 [count_tickets_open]-->
                <div class="p-b-5">
                    <label class="custom-control custom-checkbox table-config-checkbox-container">
                        <input name="tableconfig_column_19" type="checkbox"
                            class="custom-control-input table-config-checkbox cursor-pointer"
                            <?php echo e(runtimePrechecked(config('table.tableconfig_column_19'))); ?>>
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description"><?php echo app('translator')->get('lang.open_tickets'); ?></span>
                    </label>
                </div>


                <!--tableconfig_column_20 [count_tickets_closed]-->
                <div class="p-b-5">
                    <label class="custom-control custom-checkbox table-config-checkbox-container">
                        <input name="tableconfig_column_20" type="checkbox"
                            class="custom-control-input table-config-checkbox cursor-pointer"
                            <?php echo e(runtimePrechecked(config('table.tableconfig_column_20'))); ?>>
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description"><?php echo app('translator')->get('lang.closed_tickets'); ?></span>
                    </label>
                </div>


                <!--tableconfig_column_21 [assigned]-->
                <div class="p-b-5">
                    <label class="custom-control custom-checkbox table-config-checkbox-container">
                        <input name="tableconfig_column_21" type="checkbox"
                            class="custom-control-input table-config-checkbox cursor-pointer"
                            <?php echo e(runtimePrechecked(config('table.tableconfig_column_21'))); ?>>
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description"><?php echo app('translator')->get('lang.team'); ?></span>
                    </label>
                </div>


                <!--tableconfig_column_22 [project_status]-->
                <div class="p-b-5">
                    <label class="custom-control custom-checkbox table-config-checkbox-container">
                        <input name="tableconfig_column_22" type="checkbox"
                            class="custom-control-input table-config-checkbox cursor-pointer"
                            <?php echo e(runtimePrechecked(config('table.tableconfig_column_22'))); ?>>
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description"><?php echo app('translator')->get('lang.status'); ?></span>
                    </label>
                </div>



                <!--table name-->
                <input type="hidden" name="tableconfig_table_name" value="projects">

                <!--buttons-->
                <div class="buttons-block">
                    <button type="button" name="foo1" class="btn btn-rounded-x btn-secondary js-close-side-panels"
                        data-target="table-config-projects"><?php echo e(cleanLang(__('lang.close'))); ?></button>
                    <input type="hidden" name="action" value="search">
                </div>
            </div>
            <!--body-->
        </div>
    </form>
</div>
<!--sidebar--><?php /**PATH D:\my_apache\application\resources\views/pages/projects/components/misc/table-config.blade.php ENDPATH**/ ?>