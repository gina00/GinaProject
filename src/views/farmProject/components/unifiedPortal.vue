<template>
     <div class="layui-fluid">
        <div class="layui-row container">
            <div class="layui-col-md12">
                <div class="layui-row custom-bg">
                    <div class="layui-col-md12 main-nav">
                        <div class="layui-row">
                            <div class="layui-col-md4 logo_panel">
                                <img src="@/assets/images/farm/image_logo_01.svg">
                            </div>
                            <div class="layui-col-md8 nav-panel">
                                <div class="layui-row">
                                    <div class="layui-col-md9">
                                        <ul class="nav-panel-ul">
                                            <li class="selected">
                                                <a href="#">首页</a>
                                            </li>
                                            <li>
                                                <a href="#">大数据中心</a>
                                            </li>
                                            <li>
                                                <a href="#">农业一张图</a>
                                            </li>
                                            <li>
                                                <a href="#">智慧可视化管理系统</a>
                                            </li>
                                            <li>
                                                <a href="#">农业生产角色指挥系统</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="layui-col-md3">
                                        <div class="nav-panel-user">
                                            <div class="usericon">
                                                <a @click='clickLogin'>登录</a>
                                               
                                                <!-- <span>你好,</span>
                                                <a href="#">Admin</a> -->
                                            </div>
                                            <div class="exit">
                                                <a>
                                                    <img src="@/assets/images/farm/home_icon_quit.png">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="layui-col-md12 sub-nav">
                        <ul>
                            <li class="selected">
                                <a>
                                    <span class="icon-cropfarming"></span>
                                    <p>种植业</p>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span class="icon-breeding"></span>
                                    <p>养殖业</p>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span class="icon-mechanical"></span>
                                    <p>农业机械</p>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span class="icon-povertyalleviation"></span>
                                    <p>精准扶贫</p>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span class="icon-revitalize"></span>
                                    <p>乡村振兴</p>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span class="icon-safety"></span>
                                    <p>农产品质量安全</p>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span class="icon-lawenforcement"></span>
                                    <p>农业执法</p>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span class="icon-policy"></span>
                                    <p>政策与改革</p>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span class="icon-other"></span>
                                    <p>其他</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="layui-col-md10 main-content">
                <div class="tool-panel">
                    <div class="title">
                        <span class="cn">种植业</span>
                        <span class="en">cropfarming</span>
                    </div>
                    <div class="search-panel">
                        <input type="text">
                        <a class="layui-icon layui-icon-search"></a>
                    </div>
                </div>
                <ul class="sys-ul-panel">
                    <li>
                        <a>
                            <i class="layui-icon layui-icon-cellphone"></i>
                            <span class="txt">福建省农情信息调度系统</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <i class="layui-icon layui-icon-cellphone"></i>
                            <span class="txt">福建省农情信息调度系统</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <i class="layui-icon layui-icon-cellphone"></i>
                            <span class="txt">福建省农情信息调度系统</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <i class="layui-icon layui-icon-cellphone"></i>
                            <span class="txt">福建省农情信息调度系统</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="layui-col-md2 right-nav">
                <ul>
                    <li>
                        <a>
                            <i class="layui-icon layui-icon-tips"></i>
                            <span class="txt">公告通知</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <i class="layui-icon layui-icon-survey"></i>
                            <span class="txt">待办事物</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <i class="layui-icon layui-icon-face-smile"></i>
                            <span class="txt">在线帮助</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <i class="layui-icon layui-icon-senior"></i>
                            <span class="txt">农业农村部系统</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <i class="layui-icon layui-icon-senior"></i>
                            <span class="txt">厅外链接</span>
                        </a>
                    </li>
                </ul>
            </div>
            <footer class="layui-col-md12 footer">
                <p>福建省农业农村厅（中共福建省委实施乡村振兴战略领导小组办公室）承办：福建省农业信息服务中心</p>
            </footer>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                islogin:true
            }
        },
        methods: {
            clickLogin() {
                this.$emit('showLogin',this.islogin);
            }
        },
    }
</script>

<style lang="scss" scoped>
</style>