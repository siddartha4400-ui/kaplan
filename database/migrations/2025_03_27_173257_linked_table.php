<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('linked_table', function (Blueprint $table) {
            $table->id();
            $table->integer('type')->nullable();
            $table->integer('entity_id')->nullable();
            $table->integer('ref_id')->nullable();
            $table->integer('entity_type')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('linked_table');
    }
};
