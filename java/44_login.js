

        /*
            分析：
                1.给表单绑定onsubmit事件。监听器中判断每一个方法校验的结果。
                    如果都为true，则监听器方法返回true
                    如果有一个为false，则监听器方法返回false
                2.定义一些方法分别校验各个表单项。
                3.给各个表单项绑定onblur事件。

         */
        window.onload = function () {
            //1.给表单绑定onsubmit事件
            document.getElementById("form").onsubmit = function () {
                //调用用户校验方法   chekUsername();
                //调用密码校验方法   chekPassword();
                //return checkUsername() && checkPassword();

                return checkUsername() && checkPassword() && checkEmail();
            }

            //给用户名和密码框分别绑定离焦事件
            document.getElementById("username").onblur = checkUsername;
            document.getElementById("password").onblur = checkPassword;
            document.getElementById("email").onblur = checkEmail;


        }

        //校验用户名
        function checkUsername() {
            //1.获取用户名的值
            var username = document.getElementById("username").value;
            //2.定义正则表达式
            var reg_username = /^\w{6,12}$/;
            //3.判断值是否符合正则的规则
            var flag = reg_username.test(username);
            //4.提示信息
            var s_username = document.getElementById("s_username");

            if (flag) {
                //提示绿色对勾
                s_username.innerHTML = "<img width='35' height='25' src='images/gou.png'/>";
                return true;
            } else {
                //提示红色用户名有误
                s_username.innerHTML = "用户名格式有误";
                return false;
            }
            return flag;
        }

        //校验密码
        function checkPassword() {
            //1.获取用户名的值
            var password = document.getElementById("password").value;
            //2.定义正则表达式
            var reg_password = /^\w{6,12}$/;
            //3.判断值是否符合正则的规则
            var flag = reg_password.test(password);
            //4.提示信息
            var s_password = document.getElementById("s_password");

            if (flag) {
                //提示绿色对勾
                s_password.innerHTML = "<img width='35' height='25' src='images/gou.png'/>";
                return true;
            } else {
                //提示红色用户名有误
                s_password.innerHTML = "密码格式有误";
                return false;

            }
            return flag;
        }

        //校验邮箱
        function checkEmail() {
            //1.获取email的值
            var email = document.getElementById("email").value;
            //2.定义正则表达式
            var reg_email = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
            //3.判断是否符合正则的规则
            var flag = reg_email.test(email);
            //4.提示信息
            var s_email = document.getElementById("s_email");

            if (flag) {
                //提示绿色对勾
                s_email.innerHTML = "<img width='35' height='25' src='images/gou.png'/>";
                return true;
            } else {
                //提示红色用户名有误
                s_email.innerHTML = "邮箱格式有误";
                return false;
            }
            return flag;
        }

        //注册跳转登录校验
        function check() {
            var flag1 = checkUsername();
            var flag2 = checkPassword();
            var flag3 = checkEmail();
            if (flag1 && flag2 && flag3) {
                alert("注册成功，跳转个人主页");
                // window.location.href="introduction.html";
                return true;
            }
            else {
                return false;
            }
        }

