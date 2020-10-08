<? require_once 'config/bootstrap.php'; ?>

<script src="<?= url('js/config.js'); ?>"></script>
<script src="<?= url('js/function.js'); ?>"></script>


<!-- Bootstrap core JavaScript-->
<script src="<?= url('vendor/jquery/jquery.min.js'); ?>"></script>

<!-- <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script> -->

<!-- ======================jqgrid==================== -->

<!-- This is the Javascript file of jqGrid -->
<script type="text/ecmascript" src="<?= url("vendor/jqgrid/js/trirand/jquery.jqGrid.min.js") ?>"></script>
<!-- We support more than 40 localizations -->
<script type="text/ecmascript" src="<?= url("vendor/jqgrid/js/trirand/i18n/grid.locale-en.js") ?>"></script>
<!-- excel -->
<script type="text/javascript" language="javascript" src="<?= url("vendor/jqgrid/js/jszip.min.js") ?>"></script>
<!-- <script>
    $.jgrid.defaults.width = 1000;
    $.jgrid.defaults.responsive = true;
    $.jgrid.defaults.styleUI = 'Bootstrap';
</script> -->

<script type="text/ecmascript" src="<?= url("vendor/jqgrid/js/jquery-ui.min.js") ?>"></script>
<script type="text/ecmascript" src="<?= url("vendor/jqgrid/js/prettify/prettify.js") ?>"></script>

<script type="text/ecmascript" src="<?= url("vendor/jqgrid/js/codetabs.js") ?>"></script>
<script type="text/ecmascript" src="<?= url("vendor/jqgrid/js/codetabs-b.js") ?>"></script>
<script type="text/ecmascript" src="<?= url("vendor/jqgrid/js/themeswitchertool.js") ?>"></script>

<script type="text/ecmascript" src="<?= url("vendor/jqgrid/js/bootstrap3-typeahead.js") ?>"></script>

<script type="text/ecmascript" src="<?= url("vendor/jqgrid/js/bootstrap-datepicker.js") ?>"></script>


<!-- ==============================jqgrid====================== -->

<script src="<?= url('vendor/bootstrap/js/bootstrap.bundle.min.js'); ?>"></script>

<!-- Core plugin JavaScript-->
<script src="<?= url('vendor/jquery-easing/jquery.easing.min.js'); ?>"></script>


<!-- Custom scripts for all pages-->
<script src="<?= url('js/sb-admin-2.min.js'); ?>"></script>

<!-- Page level plugins -->
<script src="<?= url('vendor/chart.js/Chart.min.js'); ?>"></script>

<!-- Page level custom scripts -->
<!-- <script src="<?= url(); ?>/js/demo/chart-area-demo.js"></script> -->
<!-- <script src="<?= base_url; ?>/js/demo/chart-pie-demo.js"></script> -->


<?php
$jsFile = 'js/page_js/' . current_view . '.js';
$jsUrl  = url($jsFile);
echo file_exists($jsFile) ? '<script src="' . $jsUrl . '"></script>' : "<!-- JavaScript file missing: [{$jsUrl}] -->";
?>

<script src="<?= url('js/script.js'); ?>"></script>