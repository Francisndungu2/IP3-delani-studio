$(document).ready(function() {
            $(".show1").click(function() {
                $("#hide1").show(3000);
                $(".show1").hide(3000);
            })
            $("#hide1").click(function() {
                $("#hide1").hide(3000);
                $(".show1").show(3000);
            })