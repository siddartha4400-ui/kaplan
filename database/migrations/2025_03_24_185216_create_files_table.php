<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('files', function (Blueprint $table) {
            $table->id('fid'); // Auto-incrementing primary key
            $table->string('file_path', 255);
            $table->string('file_mime', 255);
            $table->string('file_size', 255);
            $table->string('file_name', 255);
            $table->string('file_status', 255)->nullable();
            $table->string('file_location', 255)->nullable();
            $table->string('file_format', 255)->nullable();
            $table->integer('created_at'); // Storing as an integer timestamp
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('files');
    }
};
