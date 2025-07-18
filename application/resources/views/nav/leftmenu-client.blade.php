<!-- ============================================================== -->
<!-- Left Sidebar - style you can find in sidebar.scss  -->
<!-- ============================================================== -->
<aside class="left-sidebar" id="js-trigger-nav-team">
    <!--[fix] keep id as "js-trigger-nav-team"-->
    <!-- Sidebar scroll-->
    <div class="scroll-sidebar" id="main-scroll-sidebar">
        <!-- Sidebar navigation-->
        <nav class="sidebar-nav">
            <ul data-modular-id="main_menu_client" id="sidebarnav">

                <!--[MODULES] - dynamic menu-->
                {!! config('modules.menus.main.parent1') !!}

                <!--home-->
                <li data-modular-id="main_menu_client_home"
                    class="sidenav-menu-item {{ $page['mainmenu_home'] ?? '' }} menu-tooltip menu-with-tooltip"
                    title="{{ cleanLang(__('lang.home')) }}">
                    <a class="waves-effect waves-dark" href="/home" aria-expanded="false" target="_self">
                        <i class="ti-home"></i>
                        <span class="hide-menu">{{ cleanLang(__('lang.dashboard')) }}
                        </span>
                    </a>
                </li>
                <!--home-->

                <!--[MODULES] - dynamic menu-->
                {!! config('modules.menus.main.parent2') !!}

                <!--projects[home]-->
                @if(config('visibility.modules.projects'))
                <li data-modular-id="main_menu_client_projects"
                    class="sidenav-menu-item {{ $page['mainmenu_projects'] ?? '' }} menu-tooltip menu-with-tooltip"
                    title="{{ cleanLang(__('lang.projects')) }}">
                    <a class="waves-effect waves-dark" href="{{ _url('/projects') }}" aria-expanded="false"
                        target="_self">
                        <i class="ti-folder"></i>
                        <span class="hide-menu">{{ cleanLang(__('lang.projects')) }}
                        </span>
                    </a>
                </li>
                @endif
                <!--projects-->


                <!--[MODULES] - dynamic menu-->
                {!! config('modules.menus.main.parent3') !!}

                @if(auth()->user()->is_client_owner)
                <li data-modular-id="main_menu_client_billing"
                    class="sidenav-menu-item {{ $page['mainmenu_client_billing'] ?? '' }}">
                    <a class="has-arrow waves-effect waves-dark" href="javascript:void(0);" aria-expanded="false">
                        <i class="ti-wallet"></i>
                        <span class="hide-menu">{{ cleanLang(__('lang.billing')) }}
                        </span>
                    </a>
                    <ul aria-expanded="false" class="collapse">
                        @if(config('visibility.modules.invoices'))
                        <li class="sidenav-submenu {{ $page['submenu_invoices'] ?? '' }}" id="submenu_invoices">
                            <a href="/invoices"
                                class=" {{ $page['submenu_invoices'] ?? '' }}">{{ cleanLang(__('lang.invoices')) }}</a>
                        </li>
                        @endif
                        @if(config('visibility.modules.payments'))
                        <li class="sidenav-submenu {{ $page['submenu_payments'] ?? '' }}" id="submenu_payments">
                            <a href="/payments"
                                class=" {{ $page['submenu_payments'] ?? '' }}">{{ cleanLang(__('lang.payments')) }}</a>
                        </li>
                        @endif
                        @if(config('visibility.modules.estimates'))
                        <li class="sidenav-submenu {{ $page['submenu_estimates'] ?? '' }}" id="submenu_estimates">
                            <a href="/estimates"
                                class=" {{ $page['submenu_estimates'] ?? '' }}">{{ cleanLang(__('lang.estimates')) }}</a>
                        </li>
                        @endif
                        @if(config('visibility.modules.subscriptions'))
                        <li class="sidenav-submenu {{ $page['submenu_subscriptions'] ?? '' }}"
                            id="submenu_subscriptions">
                            <a href="/subscriptions"
                                class=" {{ $page['submenu_subscriptions'] ?? '' }}">{{ cleanLang(__('lang.subscriptions')) }}</a>
                        </li>
                        @endif
                        <!--[MODULES] - dynamic menu-->
                        {!! config('modules.menus.client.billing') !!}
                    </ul>
                </li>
                @endif
                                            
                <!--[MODULES] - dynamic menu-->
                {!! config('modules.menus.main.parent4') !!}
            
                <!--proposals-->
                @if(config('visibility.modules.proposals') && auth()->user()->is_client_owner)
                <li data-modular-id="main_menu_client_proposals"
                    class="sidenav-menu-proposals {{ $page['mainmenu_client_proposals'] ?? '' }} menu-tooltip menu-with-tooltip"
                    title="{{ cleanLang(__('lang.proposals')) }}">
                    <a class="waves-effect waves-dark p-r-20" href="/proposals" aria-expanded="false" target="_self">
                        <i class="ti-bookmark-alt"></i>
                        <span class="hide-menu">{{ cleanLang(__('lang.proposals')) }}
                        </span>
                    </a>
                </li>
                @endif

                                
                <!--[MODULES] - dynamic menu-->
                {!! config('modules.menus.main.parent5') !!}

                <!--contracts-->
                @if(config('visibility.modules.contracts') && auth()->user()->is_client_owner)
                <li data-modular-id="main_menu_client_contracts"
                    class="sidenav-menu-item {{ $page['mainmenu_contracts'] ?? '' }} menu-tooltip menu-with-tooltip"
                    title="{{ cleanLang(__('lang.contracts')) }}">
                    <a class="waves-effect waves-dark p-r-20" href="/contracts" aria-expanded="false" target="_self">
                        <i class="ti-write"></i>
                        <span class="hide-menu">{{ cleanLang(__('lang.contracts')) }}
                        </span>
                    </a>
                </li>
                @endif


                                                
                <!--[MODULES] - dynamic menu-->
                {!! config('modules.menus.main.parent5') !!}

                <!--users-->
                @if(auth()->user()->is_client_owner)
                <li data-modular-id="main_menu_client_users"
                    class="sidenav-menu-item {{ $page['mainmenu_contacts'] ?? '' }} menu-tooltip menu-with-tooltip"
                    title="{{ cleanLang(__('lang.users')) }}">
                    <a class="waves-effect waves-dark" href="/users" aria-expanded="false" target="_self">
                        <i class="sl-icon-people"></i>
                        <span class="hide-menu">{{ cleanLang(__('lang.users')) }}
                        </span>
                    </a>
                </li>
                @endif
                <!--users-->

                                                
                <!--[MODULES] - dynamic menu-->
                {!! config('modules.menus.main.parent7') !!}

                <!--tickets-->
                @if(config('visibility.modules.tickets'))
                <li data-modular-id="main_menu_client_tickets"
                    class="sidenav-menu-item {{ $page['mainmenu_tickets'] ?? '' }} menu-tooltip menu-with-tooltip"
                    title="{{ cleanLang(__('lang.support_tickets')) }}">
                    <a class="waves-effect waves-dark" href="/tickets" aria-expanded="false" target="_self">
                        <i class="ti-comments"></i>
                        <span class="hide-menu">{{ cleanLang(__('lang.support')) }}
                        </span>
                    </a>
                </li>
                @endif
                <!--tickets-->

                                                
                <!--[MODULES] - dynamic menu-->
                {!! config('modules.menus.main.parent8') !!}

                <!--knowledgebase-->
                @if(config('visibility.modules.knowledgebase'))
                <li data-modular-id="main_menu_client_knowledgebase"
                    class="sidenav-menu-item {{ $page['mainmenu_kb'] ?? '' }} menu-tooltip menu-with-tooltip"
                    title="{{ cleanLang(__('lang.knowledgebase')) }}">
                    <a class="waves-effect waves-dark p-r-20" href="/knowledgebase" aria-expanded="false"
                        target="_self">
                        <i class="sl-icon-docs"></i>
                        <span class="hide-menu">{{ cleanLang(__('lang.knowledgebase')) }}
                        </span>
                    </a>
                </li>
                @endif
                <!--knowledgebase-->
                
                <!--feedback-->
                @if((int) auth()->user()->role->role_feedback >= 2)
                <li data-modular-id="main_menu_client_feedback"
                    class="sidenav-menu-item {{ $page['mainmenu_feedback'] ?? '' }} menu-tooltip menu-with-tooltip"
                    title="{{ cleanLang(__('lang.feedback')) }}">
                    <a class="waves-effect waves-dark p-r-20" href="/feedback" aria-expanded="false"
                        target="_self">
                        <i class="fas fa-star-half-stroke"></i>
                        <span class="hide-menu">{{ cleanLang(__('lang.feedback')) }}
                        </span>
                    </a>
                </li>
                @endif

                @if((int) auth()->user()->role->role_expectation >= 1)
                <li data-modular-id="main_menu_client_expectation"
                    class="sidenav-menu-item {{ $page['mainmenu_expectation'] ?? '' }} menu-tooltip menu-with-tooltip"
                    title="{{ cleanLang(__('lang.expectation')) }}">
                    <a class="waves-effect waves-dark p-r-20" href="/expectation" aria-expanded="false"
                        target="_self">
                        <i class="fa-solid fa-chart-simple"></i>
                        <span class="hide-menu">{{ cleanLang(__('lang.expectativas')) }}
                        </span>
                    </a>
                </li>
                @endif
                <!--feedback-->
                                
                <!--[MODULES] - dynamic menu-->
                {!! config('modules.menus.main.parent9') !!}

                                                
                <!--[MODULES] - dynamic menu-->
                {!! config('modules.menus.main.parent10') !!}

                                                
                <!--[MODULES] - dynamic menu-->
                {!! config('modules.menus.main.parent11') !!}

                                                
                <!--[MODULES] - dynamic menu-->
                {!! config('modules.menus.main.parent12') !!}

                                                
                <!--[MODULES] - dynamic menu-->
                {!! config('modules.menus.main.parent13') !!}

                                                
                <!--[MODULES] - dynamic menu-->
                {!! config('modules.menus.main.parent14') !!}

            </ul>
        </nav>
        <!-- End Sidebar navigation -->
    </div>
    <!-- End Sidebar scroll-->
</aside>