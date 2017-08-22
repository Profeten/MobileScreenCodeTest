<?php

namespace Tests\Browser;

use App\User;
use Illuminate\Support\Facades\App;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class LogInTest extends DuskTestCase
{
    /**
     * A Dusk test example.
     *
     * @return void
     */
    public function testLogIn()
    {
        $this->browse(function ($first, $second) {
            $first->logInAs(User::find(1))
                ->visit('/home');
        });
    }
}
