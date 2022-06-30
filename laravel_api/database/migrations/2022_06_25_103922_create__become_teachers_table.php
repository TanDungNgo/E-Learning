<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBecomeTeachersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        /*
            tạm thời chưa hoàn thiện, sẽ bổ sung thêm sau
        */
        Schema::create('_become_teachers', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->text('video_path'); // dùng để giới thiệu bản thân
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('_become_teachers');
    }
}
