<?php

/** --------------------------------------------------------------------------------
 * [EXAMPLE] Response Class for adding a newly created resource to the view
 * controller
 * @package    Grow CRM
 * @author     NextLoop
 *----------------------------------------------------------------------------------*/

namespace App\Http\Responses\Fooos;
use Illuminate\Contracts\Support\Responsable;

class StoreResponse implements Responsable {

    private $payload;

    public function __construct($payload = array()) {
        $this->payload = $payload;
    }


    /**
     * add the newly created fooo to the DOM
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function toResponse($request) {

        //set all data to arrays
        foreach ($this->payload as $key => $value) {
            $$key = $value;
        }

        //this is the first item in the database for this resource - render the whole table in the dom
        if ($count == 1) {
            $html = view('pages/fooos/components/table/table', compact('fooos'))->render();
            $jsondata['dom_html'][] = array(
                'selector' => '#fooo-table-wrapper',
                'action' => 'replace',
                'value' => $html);
        } else {
            
            //this is an additional item - prepend just the item to the dom
            $html = view('pages/fooos/components/table/ajax', compact('fooos'))->render();
            $jsondata['dom_html'][] = array(
                'selector' => '#fooo-td-container',
                'action' => 'prepend',
                'value' => $html);
        }

        //close modal
        $jsondata['dom_visibility'][] = array('selector' => '#commonModal', 'action' => 'close-modal');

        //show success noty message
        $jsondata['notification'] = array('type' => 'success', 'value' => __('lang.request_has_been_completed'));

        //response
        return response()->json($jsondata);

    }

}
