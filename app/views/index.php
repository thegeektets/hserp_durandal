<!DOCTYPE html>
<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title> HSERP- User Login </title>
<?php 

echo HTML :: style('/assets/css/style.default.css');
echo HTML :: style('/assets/css/style.shinyblue.html');
echo HTML :: script('/assets/js/jquery-1.9.1.min.js');
echo HTML :: script('/assets/js/jquery-migrate-1.1.1.min.js');
echo HTML :: script('/assets/js/jquery-ui-1.10.3.min.js');
echo HTML :: script('/assets/js/modernizr.min.js');
echo HTML :: script('/assets/js/bootstrap.min.js');
echo HTML :: script('/assets/js/jquery.cookie.js');
echo HTML :: script('/assets/js/custom.js');


?>
<script type="text/javascript">
    jQuery(document).ready(function(){
        jQuery('#login').submit(function(){
            var u = jQuery('#username').val();
            var p = jQuery('#password').val();
            if(u == '' && p == '') {
                jQuery('.login-alert').fadeIn();
                return false;
            }
        });
    });
</script>
</head>

<body class="loginpage">

<div class="loginpanel">
    <div class="loginpanelinner">
        <div class="logo animate0 bounceIn">

        <img src="<?php echo asset('/assets/images/logo.jpg') ?>" alt="" />
        </div>
        <form id="login" action="" method="post">
            <div class="inputwrapper login-alert">
                <div class="alert alert-error">Invalid username or password</div>
            </div>
            <div class="inputwrapper animate1 bounceIn">
                <input type="text" name="username" id="username" placeholder="Enter any username" />
            </div>
            <div class="inputwrapper animate2 bounceIn">
                <input type="password" name="password" id="password" placeholder="Enter any password" />
            </div>
            <div class="inputwrapper animate3 bounceIn">
                <button name="submit">Sign In</button>
            </div>
            <div class="inputwrapper animate4 bounceIn">
                <div class="pull-right">Not a member? <a href="registration.html">Sign Up</a></div>
                <label><input type="checkbox" class="remember" name="signin" /> Keep me sign in</label>
            </div>
            <?php URL::to('dashboard');?>
        </form>
    </div><!--loginpanelinner-->
</div><!--loginpanel-->

<div class="loginfooter">
    <p>&copy; 2014. HSERP. All Rights Reserved.</p>
</div>

</body>

</html>
