<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration {
    public function up()
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('doi', 128)->nullable();
            $table->date('createdDate')->nullable();
            $table->date('publishedDate')->nullable();
            $table->integer('volume')->nullable();
            $table->integer('pdfFile')->nullable();
            $table->integer('journal')->nullable();
            $table->integer('issue')->nullable();
            $table->integer('articleType')->nullable();
            $table->text('abstract')->nullable();
            $table->text('authorAffiliation')->nullable();
            $table->text('author')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('articles');
    }
};
