<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('editors', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('country');
            $table->string('qualification');
            $table->text('biography');
            $table->text('researchInterests');
            $table->string('affiliation');
            $table->integer('chiefEditor'); // Assuming it stores role ID
            $table->integer('photo'); // Assuming it stores file ID
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('editors');
    }
};
