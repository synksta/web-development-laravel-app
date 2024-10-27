<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class Button extends Component
{
    public $route;
    public $label;
    public $class;

    public function __construct($route, $label, $class = 'btn-default')
    {
        $this->route = $route;
        $this->label = $label;
        $this->class = $class;
    }

    public function render()
    {
        return view('components.button');
    }
}
