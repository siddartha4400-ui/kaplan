<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('journals', function (Blueprint $table) {
            $table->id();
            $table->text('title')->nullable();
            $table->text('publicationCharges')->nullable();
            $table->string('issno', 20)->nullable();
            $table->text('description')->nullable();
            // $table->string('chief_editor', 255)->nullable();
            // $table->text('editors')->nullable();
            // $table->text('associate_editors')->nullable();
            $table->integer('photo')->nullable();
            $table->integer('photoOurJournal')->nullable();
            $table->integer('photoBanner')->nullable();
            $table->string('shortname', 50)->nullable();
            $table->text('classification')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('journals');
    }
};
