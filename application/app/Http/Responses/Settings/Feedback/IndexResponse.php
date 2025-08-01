<?php

/** --------------------------------------------------------------------------------
 * This classes renders the response for the [index] process for the client settings
 * controller
 * @package    Grow CRM
 * @author     NextLoop
 *----------------------------------------------------------------------------------*/

namespace App\Http\Responses\Settings\Feedback;
use Illuminate\Contracts\Support\Responsable;

class IndexResponse implements Responsable {

    private $payload;

    public function __construct($payload = array()) {
        $this->payload = $payload;
    }

    /**
     * render the view for clients
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function toResponse($request) {

        //set all data to arrays
        foreach ($this->payload as $key => $value) {
            $$key = $value;
        }

        $html = view('pages/settings/sections/feedback/page', compact('page'))->render();

        $jsondata['dom_html'][] = array(
            'selector' => "#settings-wrapper",
            'action' => 'replace',
            'value' => $html);

        //update crumbs
        $html = view('misc/heading-crumbs', compact('page'))->render();
        $jsondata['dom_html'][] = array(
            'selector' => '#breadcrumbs',
            'action' => 'replace-with',
            'value' => $html);

        //left menu activate
        if (request('url_type') == 'dynamic') {
            $jsondata['dom_attributes'][] = [
                'selector' => '#settings-menu-feedback',
                'attr' => 'aria-expanded',
                'value' => false,
            ];
            $jsondata['dom_action'][] = [
                'selector' => '#settings-menu-feedback',
                'action' => 'trigger',
                'value' => 'click',
            ];
            $jsondata['dom_classes'][] = [
                'selector' => '#settings-menu-feedback-general',
                'action' => 'add',
                'value' => 'active',
            ];
        }
        $jsondata['postrun_functions'][] = [
            'value' => 'NXFeedbackQuery',
        ];       
         //ajax response
        return response()->json($jsondata);
    }
}
