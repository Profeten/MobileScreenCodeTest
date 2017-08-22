<?php

namespace Tests\Browser;

use App\User;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class AdminCategoryTest extends DuskTestCase
{
    /**
     * A Dusk test example.
     *
     * @return void
     */
    public function testSubmit()
    {
        $this->browse(function ($first, $second) {
            $first->logInAs(User::find(1))
                ->visit('/home')
                ->attach('svg', __DIR__ . '/svg/category_babysitter.svg')
                ->type('name', 'Barnvakt')
                ->press('Submit')
                ->assertSee('You\'ve successfully added a new category!');
        });
    }
}
