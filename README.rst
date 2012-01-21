+++++++++++++++++
Github-Activities
+++++++++++++++++

Github-Activities is a jQuery plugin to show a user's activities into github.

Getting Started
===============

Install
-------

Add the jQuery into your page, and then add the activities.js.
You can use the jQuery from google API.
Assuming that you have included the activities scripts in the same directory which is you page:


::

    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js"></script>
    <script type="text/javascript" src="activities.js"></script>

Configure
---------

Github-Activities takes a ``hash`` of options described below:

- username - The user who you want to get the activities (**required**)
- hide_username - It hides the username from the activities (default: **false**)

Usage
-----

::

    <div id="activities"></div>
    <script type="text/javascript">
        $('#activities').activities({'username':'bernardofire', 'hide_username': true});
    </script>

**Output**:
   - commented on pull request 35 on vandersonmota/model_mommy
   - started watching zachstronaut/stop-sopa
   - pushed to novo_layout at nsi-iff/nsi_site
   - pushed to novo_layout at bernardofire/nsi_site
   - created branch novo_layout at bernardofire/nsi_site
   - started watching ralsina/rst-cheatsheet
   - pushed to master at nsi-iff/nsi_site
   - pushed to master at bernardofire/github-activities
   - pushed to master at bernardofire/DashFilter
