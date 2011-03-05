
    

  

<!DOCTYPE html>
<html>
  <head>
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="chrome=1">
        <title>specit.tests.js at master from joshuaclayton/specit - GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />

    <link href="https://assets0.github.com/stylesheets/bundle_common.css?08ddb47aa6d530220f0e3a8bcd3e5e427bc2ef2a" media="screen" rel="stylesheet" type="text/css" />
<link href="https://assets3.github.com/stylesheets/bundle_github.css?08ddb47aa6d530220f0e3a8bcd3e5e427bc2ef2a" media="screen" rel="stylesheet" type="text/css" />

    <script type="text/javascript">
      if (typeof console == "undefined" || typeof console.log == "undefined")
        console = { log: function() {} }
    </script>
    <script type="text/javascript" charset="utf-8">
      var GitHub = {}
      var github_user = null
      
    </script>
    <script src="https://assets2.github.com/javascripts/jquery/jquery-1.4.2.min.js?08ddb47aa6d530220f0e3a8bcd3e5e427bc2ef2a" type="text/javascript"></script>
    <script src="https://assets2.github.com/javascripts/bundle_common.js?08ddb47aa6d530220f0e3a8bcd3e5e427bc2ef2a" type="text/javascript"></script>
<script src="https://assets3.github.com/javascripts/bundle_github.js?08ddb47aa6d530220f0e3a8bcd3e5e427bc2ef2a" type="text/javascript"></script>


        <script type="text/javascript" charset="utf-8">
      GitHub.spy({
        repo: "joshuaclayton/specit"
      })
    </script>

    
  <link href="https://github.com/joshuaclayton/specit/commits/master.atom" rel="alternate" title="Recent Commits to specit:master" type="application/atom+xml" />

        <meta name="description" content="A wrapper around QUnit that has a similar style to RSpec" />
    <script type="text/javascript">
      GitHub.nameWithOwner = GitHub.nameWithOwner || "joshuaclayton/specit";
      GitHub.currentRef = 'master';
      GitHub.commitSHA = "946c4904b5b9d480988da052f9dfc5aa63aba0ca";
      GitHub.currentPath = 'specit.tests.js';
      GitHub.masterBranch = "master";

      
    </script>
  

        <script type="text/javascript">
      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-3769691-2']);
      _gaq.push(['_setDomainName', 'none']);
      _gaq.push(['_trackPageview']);
      (function() {
        var ga = document.createElement('script');
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        ga.setAttribute('async', 'true');
        document.documentElement.firstChild.appendChild(ga);
      })();
    </script>

    
  </head>

  

  <body class="logged_out page-blob">
    

    

    

    

    

    <div class="subnavd" id="main">
      <div id="header" class="true">
        
          <a class="logo boring" href="https://github.com">
            <img src="/images/modules/header/logov3.png?changed" class="default" alt="github" />
            <!--[if (gt IE 8)|!(IE)]><!-->
            <img src="/images/modules/header/logov3-hover.png" class="hover" alt="github" />
            <!--<![endif]-->
          </a>
        
        
        <div class="topsearch">
  
    <ul class="nav logged_out">
      <li class="pricing"><a href="/plans">Pricing and Signup</a></li>
      <li class="explore"><a href="/explore">Explore GitHub</a></li>
      <li class="features"><a href="/features">Features</a></li>
      <li class="blog"><a href="/blog">Blog</a></li>
      <li class="login"><a href="/login?return_to=https://github.com/joshuaclayton/specit/blob/master/specit.tests.js">Login</a></li>
    </ul>
  
</div>

      </div>

      
      
        
    <div class="site">
      <div class="pagehead repohead vis-public   ">

      

      <div class="title-actions-bar">
        <h1>
          <a href="/joshuaclayton">joshuaclayton</a> / <strong><a href="https://github.com/joshuaclayton/specit">specit</a></strong>
          
          
        </h1>

        
    <ul class="actions">
      

      
        <li class="for-owner" style="display:none"><a href="https://github.com/joshuaclayton/specit/admin" class="minibutton btn-admin "><span><span class="icon"></span>Admin</span></a></li>
        <li>
          <a href="/joshuaclayton/specit/toggle_watch" class="minibutton btn-watch " id="watch_button" onclick="var f = document.createElement('form'); f.style.display = 'none'; this.parentNode.appendChild(f); f.method = 'POST'; f.action = this.href;var s = document.createElement('input'); s.setAttribute('type', 'hidden'); s.setAttribute('name', 'authenticity_token'); s.setAttribute('value', '719b06bef757242b03a0a6cc94f41b824685e877'); f.appendChild(s);f.submit();return false;" style="display:none"><span><span class="icon"></span>Watch</span></a>
          <a href="/joshuaclayton/specit/toggle_watch" class="minibutton btn-watch " id="unwatch_button" onclick="var f = document.createElement('form'); f.style.display = 'none'; this.parentNode.appendChild(f); f.method = 'POST'; f.action = this.href;var s = document.createElement('input'); s.setAttribute('type', 'hidden'); s.setAttribute('name', 'authenticity_token'); s.setAttribute('value', '719b06bef757242b03a0a6cc94f41b824685e877'); f.appendChild(s);f.submit();return false;" style="display:none"><span><span class="icon"></span>Unwatch</span></a>
        </li>
        
          
            <li class="for-notforked" style="display:none"><a href="/joshuaclayton/specit/fork" class="minibutton btn-fork " id="fork_button" onclick="var f = document.createElement('form'); f.style.display = 'none'; this.parentNode.appendChild(f); f.method = 'POST'; f.action = this.href;var s = document.createElement('input'); s.setAttribute('type', 'hidden'); s.setAttribute('name', 'authenticity_token'); s.setAttribute('value', '719b06bef757242b03a0a6cc94f41b824685e877'); f.appendChild(s);f.submit();return false;"><span><span class="icon"></span>Fork</span></a></li>
            <li class="for-hasfork" style="display:none"><a href="#" class="minibutton btn-fork " id="your_fork_button"><span><span class="icon"></span>Your Fork</span></a></li>
          

          
        
      
      
      <li class="repostats">
        <ul class="repo-stats">
          <li class="watchers"><a href="/joshuaclayton/specit/watchers" title="Watchers" class="tooltipped downwards">31</a></li>
          <li class="forks"><a href="/joshuaclayton/specit/network" title="Forks" class="tooltipped downwards">5</a></li>
        </ul>
      </li>
    </ul>

      </div>

        
  <ul class="tabs">
    <li><a href="https://github.com/joshuaclayton/specit" class="selected" highlight="repo_source">Source</a></li>
    <li><a href="https://github.com/joshuaclayton/specit/commits/master" highlight="repo_commits">Commits</a></li>
    <li><a href="/joshuaclayton/specit/network" highlight="repo_network">Network</a></li>
    <li><a href="/joshuaclayton/specit/pulls" highlight="repo_pulls">Pull Requests (0)</a></li>

    

    
      
      <li><a href="/joshuaclayton/specit/issues" highlight="issues">Issues (3)</a></li>
    

            
    <li><a href="/joshuaclayton/specit/graphs" highlight="repo_graphs">Graphs</a></li>

    <li class="contextswitch nochoices">
      <span class="toggle leftwards" >
        <em>Branch:</em>
        <code>master</code>
      </span>
    </li>
  </ul>

  <div style="display:none" id="pl-description"><p><em class="placeholder">click here to add a description</em></p></div>
  <div style="display:none" id="pl-homepage"><p><em class="placeholder">click here to add a homepage</em></p></div>

  <div class="subnav-bar">
  
  <ul>
    <li>
      <a href="#" class="dropdown">Switch Branches (1)</a>
      <ul>
        
          
            <li><strong>master &#x2713;</strong></li>
            
      </ul>
    </li>
    <li>
      <a href="#" class="dropdown defunct">Switch Tags (0)</a>
      
    </li>
    <li>
    
    <a href="/joshuaclayton/specit/branches" class="manage">Branch List</a>
    
    </li>
  </ul>
</div>

  
  
  
  
  
  



        
    <div class="frame frame-center tree-finder" style="display: none">
      <div class="breadcrumb">
        <b><a href="/joshuaclayton/specit">specit</a></b> /
        <input class="tree-finder-input" type="text" name="query" autocomplete="off" spellcheck="false">
      </div>

      
        <div class="octotip">
          <p>
            <a href="/joshuaclayton/specit/dismiss-tree-finder-help" class="dismiss js-dismiss-tree-list-help" title="Hide this notice forever">Dismiss</a>
            <strong>Octotip:</strong> You've activated the <em>file finder</em> by pressing <span class="kbd">t</span>
            Start typing to filter the file list. Use <span class="kbd badmono">↑</span> and <span class="kbd badmono">↓</span> to navigate,
            <span class="kbd">enter</span> to view files.
          </p>
        </div>
      

      <table class="tree-browser" cellpadding="0" cellspacing="0">
        <tr class="js-header"><th>&nbsp;</th><th>name</th></tr>
        <tr class="js-no-results no-results" style="display: none">
          <th colspan="2">No matching files</th>
        </tr>
        <tbody class="js-results-list">
        </tbody>
      </table>
    </div>

    <div id="jump-to-line" style="display:none">
      <h2>Jump to Line</h2>
      <form>
        <input class="textfield" type="text">
        <div class="full-button">
          <button type="submit" class="classy">
            <span>Go</span>
          </button>
        </div>
      </form>
    </div>

    <div id="repo_details" class="metabox clearfix">
      <div id="repo_details_loader" class="metabox-loader" style="display:none">Sending Request&hellip;</div>

        <a href="/joshuaclayton/specit/downloads" class="download-source" id="download_button" title="Download source, tagged packages and binaries."><span class="icon"></span>Downloads</a>

      <div id="repository_desc_wrapper">
      <div id="repository_description" rel="repository_description_edit">
        
          <p>A wrapper around QUnit that has a similar style to RSpec
            <span id="read_more" style="display:none">&mdash; <a href="#readme">Read more</a></span>
          </p>
        
      </div>

      <div id="repository_description_edit" style="display:none;" class="inline-edit">
        <form action="/joshuaclayton/specit/admin/update" method="post"><div style="margin:0;padding:0"><input name="authenticity_token" type="hidden" value="719b06bef757242b03a0a6cc94f41b824685e877" /></div>
          <input type="hidden" name="field" value="repository_description">
          <input type="text" class="textfield" name="value" value="A wrapper around QUnit that has a similar style to RSpec">
          <div class="form-actions">
            <button class="minibutton"><span>Save</span></button> &nbsp; <a href="#" class="cancel">Cancel</a>
          </div>
        </form>
      </div>

      
      <div class="repository-homepage" id="repository_homepage" rel="repository_homepage_edit">
        <p><a href="http://" rel="nofollow"></a></p>
      </div>

      <div id="repository_homepage_edit" style="display:none;" class="inline-edit">
        <form action="/joshuaclayton/specit/admin/update" method="post"><div style="margin:0;padding:0"><input name="authenticity_token" type="hidden" value="719b06bef757242b03a0a6cc94f41b824685e877" /></div>
          <input type="hidden" name="field" value="repository_homepage">
          <input type="text" class="textfield" name="value" value="">
          <div class="form-actions">
            <button class="minibutton"><span>Save</span></button> &nbsp; <a href="#" class="cancel">Cancel</a>
          </div>
        </form>
      </div>
      </div>
      <div class="rule "></div>
            <div id="url_box" class="url-box">
        <ul class="clone-urls">
          
            
            <li id="http_clone_url"><a href="https://github.com/joshuaclayton/specit.git" data-permissions="Read-Only">HTTP</a></li>
            <li id="public_clone_url"><a href="git://github.com/joshuaclayton/specit.git" data-permissions="Read-Only">Git Read-Only</a></li>
          
          
        </ul>
        <input type="text" spellcheck="false" id="url_field" class="url-field" />
              <span style="display:none" id="url_box_clippy"></span>
      <span id="clippy_tooltip_url_box_clippy" class="clippy-tooltip tooltipped" title="copy to clipboard">
      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
              width="14"
              height="14"
              class="clippy"
              id="clippy" >
      <param name="movie" value="https://assets1.github.com/flash/clippy.swf?v5"/>
      <param name="allowScriptAccess" value="always" />
      <param name="quality" value="high" />
      <param name="scale" value="noscale" />
      <param NAME="FlashVars" value="id=url_box_clippy&amp;copied=&amp;copyto=">
      <param name="bgcolor" value="#FFFFFF">
      <param name="wmode" value="opaque">
      <embed src="https://assets1.github.com/flash/clippy.swf?v5"
             width="14"
             height="14"
             name="clippy"
             quality="high"
             allowScriptAccess="always"
             type="application/x-shockwave-flash"
             pluginspage="http://www.macromedia.com/go/getflashplayer"
             FlashVars="id=url_box_clippy&amp;copied=&amp;copyto="
             bgcolor="#FFFFFF"
             wmode="opaque"
      />
      </object>
      </span>

        <p id="url_description">This URL has <strong>Read+Write</strong> access</p>
      </div>
    </div>


        

      </div><!-- /.pagehead -->

      

  





<script type="text/javascript">
  GitHub.downloadRepo = '/joshuaclayton/specit/archives/master'
  GitHub.revType = "master"

  GitHub.controllerName = "blob"
  GitHub.actionName     = "show"
  GitHub.currentAction  = "blob#show"

  

  
</script>






<div class="flash-messages"></div>


  <div id="commit">
    <div class="group">
        
  <div class="envelope commit">
    <div class="human">
      
        <div class="message"><pre><a href="/joshuaclayton/specit/commit/946c4904b5b9d480988da052f9dfc5aa63aba0ca">Rip out qunit files and add as a submodule</a> </pre></div>
      

      <div class="actor">
        <div class="gravatar">
          
          <img src="https://secure.gravatar.com/avatar/786f05409ca8d18bae8d59200156272c?s=140&d=https://github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" alt="" width="30" height="30"  />
        </div>
        <div class="name"><a href="/joshuaclayton">joshuaclayton</a> <span>(author)</span></div>
        <div class="date">
          <abbr class="relatize" title="2011-01-03 05:47:05">Mon Jan 03 05:47:05 -0800 2011</abbr>
        </div>
      </div>

      

    </div>
    <div class="machine">
      <span>c</span>ommit&nbsp;&nbsp;<a href="/joshuaclayton/specit/commit/946c4904b5b9d480988da052f9dfc5aa63aba0ca" hotkey="c">946c4904b5b9d480988d</a><br />
      <span>t</span>ree&nbsp;&nbsp;&nbsp;&nbsp;<a href="/joshuaclayton/specit/tree/946c4904b5b9d480988da052f9dfc5aa63aba0ca/.gitignore" hotkey="t">112688ed55035de9b6d5</a><br />
      
        <span>p</span>arent&nbsp;
        
        <a href="/joshuaclayton/specit/commit/b5e61cbfe4c0ea4eb3bd9f38be402a289af55daf" hotkey="p">b5e61cbfe4c0ea4eb3bd</a>
      

    </div>
  </div>

    </div>
  </div>



  <div id="slider">

  

    <div class="breadcrumb" data-path="specit.tests.js/">
      <b><a href="/joshuaclayton/specit/tree/946c4904b5b9d480988da052f9dfc5aa63aba0ca">specit</a></b> / specit.tests.js       <span style="display:none" id="clippy_4699">specit.tests.js</span>
      
      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
              width="110"
              height="14"
              class="clippy"
              id="clippy" >
      <param name="movie" value="https://assets1.github.com/flash/clippy.swf?v5"/>
      <param name="allowScriptAccess" value="always" />
      <param name="quality" value="high" />
      <param name="scale" value="noscale" />
      <param NAME="FlashVars" value="id=clippy_4699&amp;copied=copied!&amp;copyto=copy to clipboard">
      <param name="bgcolor" value="#FFFFFF">
      <param name="wmode" value="opaque">
      <embed src="https://assets1.github.com/flash/clippy.swf?v5"
             width="110"
             height="14"
             name="clippy"
             quality="high"
             allowScriptAccess="always"
             type="application/x-shockwave-flash"
             pluginspage="http://www.macromedia.com/go/getflashplayer"
             FlashVars="id=clippy_4699&amp;copied=copied!&amp;copyto=copy to clipboard"
             bgcolor="#FFFFFF"
             wmode="opaque"
      />
      </object>
      

    </div>

    <div class="frames">
      <div class="frame frame-center" data-path="specit.tests.js/">
        
          <ul class="big-actions">
            
            <li><a class="file-edit-link minibutton" href="/joshuaclayton/specit/file-edit/__current_ref__/specit.tests.js"><span>Edit this file</span></a></li>
          </ul>
        

        <div id="files">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><img alt="Txt" height="16" src="https://assets3.github.com/images/icons/txt.png?08ddb47aa6d530220f0e3a8bcd3e5e427bc2ef2a" width="16" /></span>
                <span class="mode" title="File Mode">100644</span>
                
                  <span>289 lines (235 sloc)</span>
                
                <span>9.932 kb</span>
              </div>
              <ul class="actions">
                <li><a href="/joshuaclayton/specit/raw/master/specit.tests.js" id="raw-url">raw</a></li>
                
                  <li><a href="/joshuaclayton/specit/blame/master/specit.tests.js">blame</a></li>
                
                <li><a href="/joshuaclayton/specit/commits/master/specit.tests.js">history</a></li>
              </ul>
            </div>
            
  <div class="data type-javascript">
    
      <table cellpadding="0" cellspacing="0">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
</pre>
          </td>
          <td width="100%">
            
              
                <div class="highlight"><pre><div class='line' id='LC1'><span class="nx">describe</span><span class="p">(</span><span class="s2">&quot;SpecIt&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC2'>&nbsp;&nbsp;<span class="nx">it</span><span class="p">(</span><span class="s2">&quot;should match on inclusion&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC3'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">([</span><span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">]).</span><span class="nx">should</span><span class="p">(</span><span class="nx">include</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC4'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">([</span><span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">]).</span><span class="nx">should</span><span class="p">(</span><span class="nx">include</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">);</span></div><div class='line' id='LC5'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">({</span><span class="nx">one</span><span class="o">:</span> <span class="mi">1</span><span class="p">,</span> <span class="nx">two</span><span class="o">:</span> <span class="mi">2</span><span class="p">}).</span><span class="nx">should</span><span class="p">(</span><span class="nx">include</span><span class="p">,</span> <span class="s2">&quot;one&quot;</span><span class="p">);</span></div><div class='line' id='LC6'><br/></div><div class='line' id='LC7'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">([</span><span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">]).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">include</span><span class="p">,</span> <span class="p">[</span><span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">]);</span></div><div class='line' id='LC8'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">([</span><span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">]).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">include</span><span class="p">,</span> <span class="p">[</span><span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">],</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">);</span></div><div class='line' id='LC9'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">([</span><span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">]).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">include</span><span class="p">,</span> <span class="mi">3</span><span class="p">);</span></div><div class='line' id='LC10'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">([</span><span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">]).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">include</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">4</span><span class="p">);</span></div><div class='line' id='LC11'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">({</span><span class="nx">one</span><span class="o">:</span> <span class="mi">1</span><span class="p">}).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">include</span><span class="p">,</span> <span class="s2">&quot;two&quot;</span><span class="p">);</span></div><div class='line' id='LC12'><br/></div><div class='line' id='LC13'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="s2">&quot;string&quot;</span><span class="p">).</span><span class="nx">should</span><span class="p">(</span><span class="nx">include</span><span class="p">,</span> <span class="s2">&quot;string&quot;</span><span class="p">);</span></div><div class='line' id='LC14'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="s2">&quot;string&quot;</span><span class="p">).</span><span class="nx">should</span><span class="p">(</span><span class="nx">include</span><span class="p">,</span> <span class="s2">&quot;ring&quot;</span><span class="p">);</span></div><div class='line' id='LC15'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="s2">&quot;string&quot;</span><span class="p">).</span><span class="nx">should</span><span class="p">(</span><span class="nx">include</span><span class="p">,</span> <span class="s2">&quot;tr&quot;</span><span class="p">);</span></div><div class='line' id='LC16'><br/></div><div class='line' id='LC17'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="s2">&quot;string&quot;</span><span class="p">).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">include</span><span class="p">,</span> <span class="s2">&quot;  string&quot;</span><span class="p">);</span></div><div class='line' id='LC18'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="s2">&quot;string&quot;</span><span class="p">).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">include</span><span class="p">,</span> <span class="s2">&quot;string &quot;</span><span class="p">);</span></div><div class='line' id='LC19'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="s2">&quot;string&quot;</span><span class="p">).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">include</span><span class="p">,</span> <span class="s2">&quot;cat&quot;</span><span class="p">);</span></div><div class='line' id='LC20'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC21'><br/></div><div class='line' id='LC22'>&nbsp;&nbsp;<span class="nx">it</span><span class="p">(</span><span class="s2">&quot;should match on equality&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC23'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="s2">&quot;string&quot;</span><span class="p">).</span><span class="nx">should</span><span class="p">(</span><span class="nx">eql</span><span class="p">,</span> <span class="s2">&quot;string&quot;</span><span class="p">);</span></div><div class='line' id='LC24'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="mi">1</span><span class="p">).</span><span class="nx">should</span><span class="p">(</span><span class="nx">eql</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC25'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="kc">true</span><span class="p">).</span><span class="nx">should</span><span class="p">(</span><span class="nx">eql</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC26'><br/></div><div class='line' id='LC27'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="s2">&quot;string&quot;</span><span class="p">).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">eql</span><span class="p">,</span> <span class="s2">&quot;junk&quot;</span><span class="p">);</span></div><div class='line' id='LC28'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">([]).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">eql</span><span class="p">,</span> <span class="p">[]);</span></div><div class='line' id='LC29'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">([</span><span class="s2">&quot;tree&quot;</span><span class="p">]).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">eql</span><span class="p">,</span> <span class="p">[</span><span class="s2">&quot;tree&quot;</span><span class="p">]);</span></div><div class='line' id='LC30'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">({}).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">eql</span><span class="p">,</span> <span class="p">{});</span></div><div class='line' id='LC31'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="kc">true</span><span class="p">).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">eql</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC32'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC33'><br/></div><div class='line' id='LC34'>&nbsp;&nbsp;<span class="nx">it</span><span class="p">(</span><span class="s2">&quot;should match on similarity&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC35'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="s2">&quot;string&quot;</span><span class="p">).</span><span class="nx">should</span><span class="p">(</span><span class="nx">beSimilarTo</span><span class="p">,</span> <span class="s2">&quot;string&quot;</span><span class="p">);</span></div><div class='line' id='LC36'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="mi">1</span><span class="p">).</span><span class="nx">should</span><span class="p">(</span><span class="nx">beSimilarTo</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC37'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="kc">true</span><span class="p">).</span><span class="nx">should</span><span class="p">(</span><span class="nx">beSimilarTo</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC38'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">([]).</span><span class="nx">should</span><span class="p">(</span><span class="nx">beSimilarTo</span><span class="p">,</span> <span class="p">[]);</span></div><div class='line' id='LC39'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">([</span><span class="s2">&quot;tree&quot;</span><span class="p">]).</span><span class="nx">should</span><span class="p">(</span><span class="nx">beSimilarTo</span><span class="p">,</span> <span class="p">[</span><span class="s2">&quot;tree&quot;</span><span class="p">]);</span></div><div class='line' id='LC40'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">({}).</span><span class="nx">should</span><span class="p">(</span><span class="nx">beSimilarTo</span><span class="p">,</span> <span class="p">{});</span></div><div class='line' id='LC41'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">({</span><span class="nx">a</span><span class="o">:</span> <span class="mi">1</span><span class="p">}).</span><span class="nx">should</span><span class="p">(</span><span class="nx">beSimilarTo</span><span class="p">,</span> <span class="p">{</span><span class="s2">&quot;a&quot;</span><span class="o">:</span> <span class="mi">1</span><span class="p">});</span></div><div class='line' id='LC42'><br/></div><div class='line' id='LC43'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="s2">&quot;string&quot;</span><span class="p">).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">beSimilarTo</span><span class="p">,</span> <span class="s2">&quot;junk&quot;</span><span class="p">);</span></div><div class='line' id='LC44'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="kc">true</span><span class="p">).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">beSimilarTo</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC45'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">({</span><span class="nx">a</span><span class="o">:</span> <span class="mi">1</span><span class="p">}).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">beSimilarTo</span><span class="p">,</span> <span class="p">{</span><span class="nx">b</span><span class="o">:</span> <span class="mi">1</span><span class="p">});</span></div><div class='line' id='LC46'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC47'><br/></div><div class='line' id='LC48'>&nbsp;&nbsp;<span class="nx">it</span><span class="p">(</span><span class="s2">&quot;should match on truthiness&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC49'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="s2">&quot;string&quot;</span><span class="p">).</span><span class="nx">should</span><span class="p">(</span><span class="nx">be</span><span class="p">);</span></div><div class='line' id='LC50'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="kc">true</span><span class="p">).</span><span class="nx">should</span><span class="p">(</span><span class="nx">be</span><span class="p">);</span></div><div class='line' id='LC51'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="mi">1</span><span class="p">).</span><span class="nx">should</span><span class="p">(</span><span class="nx">be</span><span class="p">);</span></div><div class='line' id='LC52'><br/></div><div class='line' id='LC53'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="s2">&quot;&quot;</span><span class="p">).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">be</span><span class="p">);</span></div><div class='line' id='LC54'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="kc">false</span><span class="p">).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">be</span><span class="p">);</span></div><div class='line' id='LC55'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="mi">0</span><span class="p">).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">be</span><span class="p">);</span></div><div class='line' id='LC56'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC57'><br/></div><div class='line' id='LC58'>&nbsp;&nbsp;<span class="nx">it</span><span class="p">(</span><span class="s2">&quot;should match by type comparison&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC59'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="s2">&quot;string&quot;</span><span class="p">).</span><span class="nx">should</span><span class="p">(</span><span class="nx">beA</span><span class="p">,</span> <span class="nb">String</span><span class="p">);</span></div><div class='line' id='LC60'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{}).</span><span class="nx">should</span><span class="p">(</span><span class="nx">beA</span><span class="p">,</span> <span class="nb">Function</span><span class="p">);</span></div><div class='line' id='LC61'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="kc">true</span><span class="p">).</span><span class="nx">should</span><span class="p">(</span><span class="nx">beA</span><span class="p">,</span> <span class="nb">Boolean</span><span class="p">);</span></div><div class='line' id='LC62'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">({}).</span><span class="nx">should</span><span class="p">(</span><span class="nx">beAn</span><span class="p">,</span> <span class="nb">Object</span><span class="p">);</span></div><div class='line' id='LC63'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">([]).</span><span class="nx">should</span><span class="p">(</span><span class="nx">beAn</span><span class="p">,</span> <span class="nb">Array</span><span class="p">);</span></div><div class='line' id='LC64'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="mi">1</span><span class="p">).</span><span class="nx">should</span><span class="p">(</span><span class="nx">beA</span><span class="p">,</span> <span class="nb">Number</span><span class="p">);</span></div><div class='line' id='LC65'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="sr">/regular-expression/</span><span class="p">).</span><span class="nx">should</span><span class="p">(</span><span class="nx">beA</span><span class="p">,</span> <span class="nb">RegExp</span><span class="p">);</span></div><div class='line' id='LC66'><br/></div><div class='line' id='LC67'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="s2">&quot;string&quot;</span><span class="p">).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">beAn</span><span class="p">,</span> <span class="nb">Object</span><span class="p">);</span></div><div class='line' id='LC68'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="s2">&quot;string&quot;</span><span class="p">).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">beA</span><span class="p">,</span> <span class="nb">Number</span><span class="p">);</span></div><div class='line' id='LC69'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">([]).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">beAn</span><span class="p">,</span> <span class="nb">Object</span><span class="p">);</span></div><div class='line' id='LC70'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC71'><br/></div><div class='line' id='LC72'>&nbsp;&nbsp;<span class="nx">it</span><span class="p">(</span><span class="s2">&quot;should match against regular expressions&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC73'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="s2">&quot;string&quot;</span><span class="p">).</span><span class="nx">should</span><span class="p">(</span><span class="nx">match</span><span class="p">,</span> <span class="sr">/string/</span><span class="p">);</span></div><div class='line' id='LC74'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="s2">&quot;202-555-1212&quot;</span><span class="p">).</span><span class="nx">should</span><span class="p">(</span><span class="nx">match</span><span class="p">,</span> <span class="sr">/\d{3}.\d{3}.\d{4}/</span><span class="p">);</span></div><div class='line' id='LC75'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="s2">&quot;string&quot;</span><span class="p">).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">match</span><span class="p">,</span> <span class="sr">/\\\\w{10}/</span><span class="p">);</span></div><div class='line' id='LC76'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC77'><br/></div><div class='line' id='LC78'>&nbsp;&nbsp;<span class="nx">it</span><span class="p">(</span><span class="s2">&quot;should match on method presence&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC79'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">myObject</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC80'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">attribute1</span><span class="o">:</span> <span class="mi">1</span><span class="p">,</span></div><div class='line' id='LC81'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">booleanAttr</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC82'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">methodAttr</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{}</span></div><div class='line' id='LC83'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC84'><br/></div><div class='line' id='LC85'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="nx">myObject</span><span class="p">).</span><span class="nx">should</span><span class="p">(</span><span class="nx">respondTo</span><span class="p">,</span> <span class="s2">&quot;methodAttr&quot;</span><span class="p">);</span></div><div class='line' id='LC86'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="nx">myObject</span><span class="p">).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">respondTo</span><span class="p">,</span> <span class="s2">&quot;attribute1&quot;</span><span class="p">);</span></div><div class='line' id='LC87'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="nx">myObject</span><span class="p">).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">respondTo</span><span class="p">,</span> <span class="s2">&quot;booleanAttr&quot;</span><span class="p">);</span></div><div class='line' id='LC88'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="nx">myObject</span><span class="p">).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">respondTo</span><span class="p">,</span> <span class="s2">&quot;junkMethod&quot;</span><span class="p">);</span></div><div class='line' id='LC89'><br/></div><div class='line' id='LC90'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">Person</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC91'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">name</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">name</span> <span class="o">||</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></div><div class='line' id='LC92'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">age</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">age</span> <span class="o">||</span> <span class="mi">13</span><span class="p">;</span></div><div class='line' id='LC93'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">sayHi</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC94'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s2">&quot;Hello; my name is &quot;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="p">;</span></div><div class='line' id='LC95'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC96'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC97'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC98'><br/></div><div class='line' id='LC99'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">john</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Person</span><span class="p">({</span><span class="nx">name</span><span class="o">:</span> <span class="s2">&quot;John Doe&quot;</span><span class="p">,</span> <span class="nx">age</span><span class="o">:</span> <span class="mi">35</span><span class="p">});</span></div><div class='line' id='LC100'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="nx">john</span><span class="p">).</span><span class="nx">should</span><span class="p">(</span><span class="nx">respondTo</span><span class="p">,</span> <span class="s2">&quot;sayHi&quot;</span><span class="p">);</span></div><div class='line' id='LC101'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="nx">john</span><span class="p">).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">respondTo</span><span class="p">,</span> <span class="s2">&quot;name&quot;</span><span class="p">);</span></div><div class='line' id='LC102'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="nx">john</span><span class="p">).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">respondTo</span><span class="p">,</span> <span class="s2">&quot;age&quot;</span><span class="p">);</span></div><div class='line' id='LC103'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="nx">john</span><span class="p">).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">respondTo</span><span class="p">,</span> <span class="s2">&quot;sayGoodbye&quot;</span><span class="p">);</span></div><div class='line' id='LC104'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC105'><br/></div><div class='line' id='LC106'>&nbsp;&nbsp;<span class="nx">it</span><span class="p">(</span><span class="s2">&quot;should match on less than&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC107'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span>  <span class="mi">2</span><span class="p">).</span><span class="nx">should</span><span class="p">(</span><span class="nx">beLessThan</span><span class="p">,</span> <span class="mi">5</span><span class="p">);</span></div><div class='line' id='LC108'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span> <span class="o">-</span><span class="mi">5</span><span class="p">).</span><span class="nx">should</span><span class="p">(</span><span class="nx">beLessThan</span><span class="p">,</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC109'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span>  <span class="mi">0</span><span class="p">).</span><span class="nx">should</span><span class="p">(</span><span class="nx">beLessThan</span><span class="p">,</span> <span class="mf">0.1</span><span class="p">);</span></div><div class='line' id='LC110'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span>  <span class="mi">5</span><span class="p">).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">beLessThan</span><span class="p">,</span> <span class="mi">3</span><span class="p">);</span></div><div class='line' id='LC111'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="mf">0.1</span><span class="p">).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">beLessThan</span><span class="p">,</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC112'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="mf">0.1</span><span class="p">).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">beLessThan</span><span class="p">,</span> <span class="mf">0.05</span><span class="p">);</span></div><div class='line' id='LC113'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span>  <span class="mi">5</span><span class="p">).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">beLessThan</span><span class="p">,</span> <span class="mi">5</span><span class="p">);</span></div><div class='line' id='LC114'><br/></div><div class='line' id='LC115'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="s2">&quot;awesome&quot;</span><span class="p">).</span><span class="nx">should</span><span class="p">(</span><span class="nx">beLessThan</span><span class="p">,</span> <span class="s2">&quot;great&quot;</span><span class="p">);</span></div><div class='line' id='LC116'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC117'><br/></div><div class='line' id='LC118'>&nbsp;&nbsp;<span class="nx">it</span><span class="p">(</span><span class="s2">&quot;should match on less than or equal to&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC119'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span>  <span class="mi">2</span><span class="p">).</span><span class="nx">should</span><span class="p">(</span><span class="nx">beLessThanOrEqualTo</span><span class="p">,</span> <span class="mi">5</span><span class="p">);</span></div><div class='line' id='LC120'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span> <span class="o">-</span><span class="mi">5</span><span class="p">).</span><span class="nx">should</span><span class="p">(</span><span class="nx">beLessThanOrEqualTo</span><span class="p">,</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC121'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span>  <span class="mi">0</span><span class="p">).</span><span class="nx">should</span><span class="p">(</span><span class="nx">beLessThanOrEqualTo</span><span class="p">,</span> <span class="mf">0.1</span><span class="p">);</span></div><div class='line' id='LC122'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span>  <span class="mi">5</span><span class="p">).</span><span class="nx">should</span><span class="p">(</span><span class="nx">beLessThanOrEqualTo</span><span class="p">,</span> <span class="mi">5</span><span class="p">);</span></div><div class='line' id='LC123'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="mf">0.1</span><span class="p">).</span><span class="nx">should</span><span class="p">(</span><span class="nx">beLessThanOrEqualTo</span><span class="p">,</span> <span class="mf">0.1</span><span class="p">);</span></div><div class='line' id='LC124'><br/></div><div class='line' id='LC125'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span>  <span class="mi">5</span><span class="p">).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">beLessThanOrEqualTo</span><span class="p">,</span> <span class="mi">3</span><span class="p">);</span></div><div class='line' id='LC126'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="mf">0.1</span><span class="p">).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">beLessThanOrEqualTo</span><span class="p">,</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC127'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="mf">0.1</span><span class="p">).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">beLessThanOrEqualTo</span><span class="p">,</span> <span class="mf">0.05</span><span class="p">);</span></div><div class='line' id='LC128'><br/></div><div class='line' id='LC129'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="s2">&quot;awesome&quot;</span><span class="p">).</span><span class="nx">should</span><span class="p">(</span><span class="nx">beLessThanOrEqualTo</span><span class="p">,</span> <span class="s2">&quot;great&quot;</span><span class="p">);</span></div><div class='line' id='LC130'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="s2">&quot;great&quot;</span><span class="p">).</span><span class="nx">should</span><span class="p">(</span><span class="nx">beLessThanOrEqualTo</span><span class="p">,</span> <span class="s2">&quot;great&quot;</span><span class="p">);</span></div><div class='line' id='LC131'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC132'><br/></div><div class='line' id='LC133'>&nbsp;&nbsp;<span class="nx">it</span><span class="p">(</span><span class="s2">&quot;should match on greater than&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC134'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span>  <span class="mi">2</span><span class="p">).</span><span class="nx">should</span><span class="p">(</span><span class="nx">beGreaterThan</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC135'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span> <span class="o">-</span><span class="mi">5</span><span class="p">).</span><span class="nx">should</span><span class="p">(</span><span class="nx">beGreaterThan</span><span class="p">,</span> <span class="o">-</span><span class="mi">10</span><span class="p">);</span></div><div class='line' id='LC136'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span>  <span class="mi">0</span><span class="p">).</span><span class="nx">should</span><span class="p">(</span><span class="nx">beGreaterThan</span><span class="p">,</span> <span class="o">-</span><span class="mf">0.1</span><span class="p">);</span></div><div class='line' id='LC137'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span>  <span class="mi">5</span><span class="p">).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">beGreaterThan</span><span class="p">,</span> <span class="mi">30</span><span class="p">);</span></div><div class='line' id='LC138'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="mf">0.1</span><span class="p">).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">beGreaterThan</span><span class="p">,</span> <span class="mf">0.2</span><span class="p">);</span></div><div class='line' id='LC139'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="mf">0.01</span><span class="p">).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">beGreaterThan</span><span class="p">,</span> <span class="mf">0.05</span><span class="p">);</span></div><div class='line' id='LC140'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span>  <span class="mi">5</span><span class="p">).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">beGreaterThan</span><span class="p">,</span> <span class="mi">5</span><span class="p">);</span></div><div class='line' id='LC141'><br/></div><div class='line' id='LC142'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="s2">&quot;awesome&quot;</span><span class="p">).</span><span class="nx">should</span><span class="p">(</span><span class="nx">beGreaterThan</span><span class="p">,</span> <span class="s2">&quot;absolute&quot;</span><span class="p">);</span></div><div class='line' id='LC143'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC144'><br/></div><div class='line' id='LC145'>&nbsp;&nbsp;<span class="nx">it</span><span class="p">(</span><span class="s2">&quot;should match on greater than or equal to&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC146'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span>  <span class="mi">2</span><span class="p">).</span><span class="nx">should</span><span class="p">(</span><span class="nx">beGreaterThanOrEqualTo</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC147'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span> <span class="o">-</span><span class="mi">5</span><span class="p">).</span><span class="nx">should</span><span class="p">(</span><span class="nx">beGreaterThanOrEqualTo</span><span class="p">,</span> <span class="o">-</span><span class="mi">10</span><span class="p">);</span></div><div class='line' id='LC148'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span>  <span class="mi">0</span><span class="p">).</span><span class="nx">should</span><span class="p">(</span><span class="nx">beGreaterThanOrEqualTo</span><span class="p">,</span> <span class="o">-</span><span class="mf">0.1</span><span class="p">);</span></div><div class='line' id='LC149'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span>  <span class="mi">5</span><span class="p">).</span><span class="nx">should</span><span class="p">(</span><span class="nx">beGreaterThanOrEqualTo</span><span class="p">,</span> <span class="mi">5</span><span class="p">);</span></div><div class='line' id='LC150'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span>  <span class="mi">5</span><span class="p">).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">beGreaterThanOrEqualTo</span><span class="p">,</span> <span class="mi">30</span><span class="p">);</span></div><div class='line' id='LC151'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="mf">0.1</span><span class="p">).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">beGreaterThanOrEqualTo</span><span class="p">,</span> <span class="mf">0.2</span><span class="p">);</span></div><div class='line' id='LC152'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="mf">0.01</span><span class="p">).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">beGreaterThanOrEqualTo</span><span class="p">,</span> <span class="mf">0.05</span><span class="p">);</span></div><div class='line' id='LC153'><br/></div><div class='line' id='LC154'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="s2">&quot;awesome&quot;</span><span class="p">).</span><span class="nx">should</span><span class="p">(</span><span class="nx">beGreaterThanOrEqualTo</span><span class="p">,</span> <span class="s2">&quot;awesome&quot;</span><span class="p">);</span></div><div class='line' id='LC155'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC156'><br/></div><div class='line' id='LC157'>&nbsp;&nbsp;<span class="nx">it</span><span class="p">(</span><span class="s2">&quot;should match on emptiness&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC158'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">([]).</span><span class="nx">should</span><span class="p">(</span><span class="nx">beEmpty</span><span class="p">);</span></div><div class='line' id='LC159'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">({}).</span><span class="nx">should</span><span class="p">(</span><span class="nx">beEmpty</span><span class="p">);</span></div><div class='line' id='LC160'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="mi">0</span><span class="p">).</span><span class="nx">should</span><span class="p">(</span><span class="nx">beEmpty</span><span class="p">);</span></div><div class='line' id='LC161'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="mi">5</span><span class="p">).</span><span class="nx">should</span><span class="p">(</span><span class="nx">beEmpty</span><span class="p">);</span></div><div class='line' id='LC162'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="s2">&quot;&quot;</span><span class="p">).</span><span class="nx">should</span><span class="p">(</span><span class="nx">beEmpty</span><span class="p">);</span></div><div class='line' id='LC163'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">([</span><span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">]).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">beEmpty</span><span class="p">);</span></div><div class='line' id='LC164'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">({</span><span class="nx">one</span><span class="o">:</span> <span class="mi">1</span><span class="p">}).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">beEmpty</span><span class="p">);</span></div><div class='line' id='LC165'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="s2">&quot;one&quot;</span><span class="p">).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">beEmpty</span><span class="p">);</span></div><div class='line' id='LC166'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC167'><br/></div><div class='line' id='LC168'>&nbsp;&nbsp;<span class="nx">it</span><span class="p">(</span><span class="s2">&quot;should match on elements on a page&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC169'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;.workspace&quot;</span><span class="p">).</span><span class="nx">append</span><span class="p">(</span><span class="s2">&quot;&lt;div class=&#39;great&#39;&gt;&quot;</span><span class="p">);</span></div><div class='line' id='LC170'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="s2">&quot;.workspace .great&quot;</span><span class="p">)).</span><span class="nx">should</span><span class="p">(</span><span class="nx">beOnThePage</span><span class="p">);</span></div><div class='line' id='LC171'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="s2">&quot;.workspace .non-existant&quot;</span><span class="p">)).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">beOnThePage</span><span class="p">);</span></div><div class='line' id='LC172'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;.workspace&quot;</span><span class="p">).</span><span class="nx">empty</span><span class="p">();</span></div><div class='line' id='LC173'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC174'><span class="p">});</span></div><div class='line' id='LC175'><br/></div><div class='line' id='LC176'><span class="kd">var</span> <span class="nx">john</span><span class="p">,</span> <span class="nx">beforeCallbackTest</span><span class="p">,</span> <span class="nx">afterCallbackTest</span><span class="p">;</span></div><div class='line' id='LC177'><br/></div><div class='line' id='LC178'><span class="nx">describe</span><span class="p">(</span><span class="s2">&quot;SpecIt with a before callback&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC179'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">jane</span> <span class="o">=</span> <span class="p">{</span><span class="nx">name</span><span class="o">:</span> <span class="s2">&quot;Jane&quot;</span><span class="p">};</span></div><div class='line' id='LC180'><br/></div><div class='line' id='LC181'>&nbsp;&nbsp;<span class="nx">before</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC182'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">beforeCallbackTest</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC183'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">john</span> <span class="o">=</span> <span class="p">{</span><span class="nx">name</span><span class="o">:</span> <span class="s2">&quot;John Doe&quot;</span><span class="p">};</span></div><div class='line' id='LC184'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC185'><br/></div><div class='line' id='LC186'>&nbsp;&nbsp;<span class="nx">it</span><span class="p">(</span><span class="s2">&quot;should support before&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC187'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ok</span><span class="p">(</span><span class="nx">beforeCallbackTest</span><span class="p">);</span></div><div class='line' id='LC188'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">equal</span><span class="p">(</span><span class="nx">afterCallbackTest</span><span class="p">,</span> <span class="kc">undefined</span><span class="p">);</span></div><div class='line' id='LC189'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC190'><br/></div><div class='line' id='LC191'>&nbsp;&nbsp;<span class="nx">it</span><span class="p">(</span><span class="s2">&quot;should run before every test&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC192'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">john</span><span class="p">.</span><span class="nx">name</span> <span class="o">=</span> <span class="s2">&quot;Wrong name&quot;</span><span class="p">;</span></div><div class='line' id='LC193'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">jane</span><span class="p">.</span><span class="nx">age</span> <span class="o">=</span> <span class="mi">26</span><span class="p">;</span></div><div class='line' id='LC194'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC195'><br/></div><div class='line' id='LC196'>&nbsp;&nbsp;<span class="nx">it</span><span class="p">(</span><span class="s2">&quot;should run before every test&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC197'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">equals</span><span class="p">(</span><span class="nx">john</span><span class="p">.</span><span class="nx">name</span><span class="p">,</span> <span class="s2">&quot;John Doe&quot;</span><span class="p">);</span></div><div class='line' id='LC198'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC199'><br/></div><div class='line' id='LC200'>&nbsp;&nbsp;<span class="nx">it</span><span class="p">(</span><span class="s2">&quot;should not know attributes from another before callback&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC201'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">equals</span><span class="p">(</span><span class="nx">john</span><span class="p">.</span><span class="nx">age</span><span class="p">,</span> <span class="kc">undefined</span><span class="p">);</span></div><div class='line' id='LC202'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC203'><br/></div><div class='line' id='LC204'>&nbsp;&nbsp;<span class="nx">it</span><span class="p">(</span><span class="s2">&quot;should not modify attributes on a local object if untouched in before&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC205'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">equals</span><span class="p">(</span><span class="nx">jane</span><span class="p">.</span><span class="nx">age</span><span class="p">,</span> <span class="mi">26</span><span class="p">);</span></div><div class='line' id='LC206'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC207'><span class="p">});</span></div><div class='line' id='LC208'><br/></div><div class='line' id='LC209'><span class="c1">// the john object will carry over, but the jane object will not</span></div><div class='line' id='LC210'><span class="nx">describe</span><span class="p">(</span><span class="s2">&quot;SpecIt with a different before callback&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC211'>&nbsp;&nbsp;<span class="nx">before</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span> <span class="nx">john</span><span class="p">.</span><span class="nx">age</span> <span class="o">=</span> <span class="mi">35</span><span class="p">;</span> <span class="p">});</span></div><div class='line' id='LC212'><br/></div><div class='line' id='LC213'>&nbsp;&nbsp;<span class="nx">it</span><span class="p">(</span><span class="s2">&quot;should not run other describes&#39; before callbacks&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC214'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">john</span><span class="p">.</span><span class="nx">name</span> <span class="o">=</span> <span class="s2">&quot;whatever&quot;</span><span class="p">;</span></div><div class='line' id='LC215'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">equals</span><span class="p">(</span><span class="nx">john</span><span class="p">.</span><span class="nx">age</span><span class="p">,</span> <span class="mi">35</span><span class="p">);</span></div><div class='line' id='LC216'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC217'><br/></div><div class='line' id='LC218'>&nbsp;&nbsp;<span class="nx">it</span><span class="p">(</span><span class="s2">&quot;should not run other describes&#39; before callbacks&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC219'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">equals</span><span class="p">(</span><span class="nx">john</span><span class="p">.</span><span class="nx">name</span><span class="p">,</span> <span class="s2">&quot;whatever&quot;</span><span class="p">);</span></div><div class='line' id='LC220'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">equals</span><span class="p">(</span><span class="nx">john</span><span class="p">.</span><span class="nx">age</span><span class="p">,</span> <span class="mi">35</span><span class="p">);</span></div><div class='line' id='LC221'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC222'><br/></div><div class='line' id='LC223'>&nbsp;&nbsp;<span class="nx">it</span><span class="p">(</span><span class="s2">&quot;should not know of other objects in a different describe&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC224'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">equals</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">jane</span><span class="p">,</span> <span class="s2">&quot;undefined&quot;</span><span class="p">);</span></div><div class='line' id='LC225'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC226'><span class="p">});</span></div><div class='line' id='LC227'><br/></div><div class='line' id='LC228'><span class="nx">describe</span><span class="p">(</span><span class="s2">&quot;SpecIt with an after callback&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC229'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">changedFromAfterCallback</span> <span class="o">=</span> <span class="s2">&quot;unchanged&quot;</span><span class="p">;</span></div><div class='line' id='LC230'><br/></div><div class='line' id='LC231'>&nbsp;&nbsp;<span class="nx">after</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC232'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">changedFromAfterCallback</span> <span class="o">=</span> <span class="s2">&quot;changed&quot;</span><span class="p">;</span></div><div class='line' id='LC233'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC234'><br/></div><div class='line' id='LC235'>&nbsp;&nbsp;<span class="nx">it</span><span class="p">(</span><span class="s2">&quot;should not call after callback until after a test is run&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC236'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">equals</span><span class="p">(</span><span class="nx">changedFromAfterCallback</span><span class="p">,</span> <span class="s2">&quot;unchanged&quot;</span><span class="p">);</span></div><div class='line' id='LC237'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC238'><br/></div><div class='line' id='LC239'>&nbsp;&nbsp;<span class="nx">it</span><span class="p">(</span><span class="s2">&quot;should call the after callback the first test is run&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC240'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">equals</span><span class="p">(</span><span class="nx">changedFromAfterCallback</span><span class="p">,</span> <span class="s2">&quot;changed&quot;</span><span class="p">);</span></div><div class='line' id='LC241'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">changedFromAfterCallback</span> <span class="o">=</span> <span class="s2">&quot;bogus&quot;</span><span class="p">;</span></div><div class='line' id='LC242'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC243'><br/></div><div class='line' id='LC244'>&nbsp;&nbsp;<span class="nx">it</span><span class="p">(</span><span class="s2">&quot;should call the after callback after each test is run&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC245'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">equals</span><span class="p">(</span><span class="nx">changedFromAfterCallback</span><span class="p">,</span> <span class="s2">&quot;changed&quot;</span><span class="p">);</span></div><div class='line' id='LC246'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC247'><span class="p">});</span></div><div class='line' id='LC248'><br/></div><div class='line' id='LC249'><span class="nx">describe</span><span class="p">(</span><span class="s2">&quot;SpecIt handling before and after&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC250'>&nbsp;&nbsp;<span class="nx">before</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;body&quot;</span><span class="p">).</span><span class="nx">append</span><span class="p">(</span><span class="s2">&quot;&lt;div id=&#39;crazy&#39;&gt;&quot;</span><span class="p">);</span> <span class="p">});</span></div><div class='line' id='LC251'>&nbsp;&nbsp;<span class="nx">after</span> <span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#crazy&quot;</span><span class="p">).</span><span class="nx">remove</span><span class="p">();</span> <span class="p">});</span></div><div class='line' id='LC252'><br/></div><div class='line' id='LC253'>&nbsp;&nbsp;<span class="nx">it</span><span class="p">(</span><span class="s2">&quot;should run before callbacks correctly&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC254'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#crazy&quot;</span><span class="p">).</span><span class="nx">html</span><span class="p">(</span><span class="s2">&quot;awesome div&quot;</span><span class="p">);</span></div><div class='line' id='LC255'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#crazy:contains(awesome div)&quot;</span><span class="p">)).</span><span class="nx">should</span><span class="p">(</span><span class="nx">beOnThePage</span><span class="p">);</span></div><div class='line' id='LC256'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC257'><br/></div><div class='line' id='LC258'>&nbsp;&nbsp;<span class="nx">it</span><span class="p">(</span><span class="s2">&quot;should run after callbacks correctly&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC259'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#crazy&quot;</span><span class="p">).</span><span class="nx">length</span><span class="p">).</span><span class="nx">should</span><span class="p">(</span><span class="nx">eql</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC260'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#crazy:contains(awesome div)&quot;</span><span class="p">)).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">beOnThePage</span><span class="p">);</span></div><div class='line' id='LC261'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC262'><span class="p">});</span></div><div class='line' id='LC263'><br/></div><div class='line' id='LC264'><span class="nx">describe</span><span class="p">(</span><span class="s2">&quot;SpecIt should know relative positions&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC265'>&nbsp;&nbsp;<span class="nx">it</span><span class="p">(</span><span class="s2">&quot;should know if an element is to the left of another&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC266'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="s2">&quot;.left-right-correct .left&quot;</span><span class="p">)).</span><span class="nx">should</span><span class="p">(</span><span class="nx">beToTheLeftOf</span><span class="p">,</span> <span class="s2">&quot;.left-right-correct .right&quot;</span><span class="p">);</span></div><div class='line' id='LC267'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="s2">&quot;.left-right-correct .text-1&quot;</span><span class="p">)).</span><span class="nx">should</span><span class="p">(</span><span class="nx">beToTheLeftOf</span><span class="p">,</span> <span class="s2">&quot;.left-right-correct .text-2&quot;</span><span class="p">);</span></div><div class='line' id='LC268'><br/></div><div class='line' id='LC269'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="s2">&quot;.left-right-correct .right&quot;</span><span class="p">)).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">beToTheLeftOf</span><span class="p">,</span> <span class="s2">&quot;.left-right-correct .left&quot;</span><span class="p">);</span></div><div class='line' id='LC270'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="s2">&quot;.left-right-broken .left&quot;</span><span class="p">)).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">beToTheLeftOf</span><span class="p">,</span> <span class="s2">&quot;.left-right-broken .right&quot;</span><span class="p">);</span></div><div class='line' id='LC271'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC272'><br/></div><div class='line' id='LC273'>&nbsp;&nbsp;<span class="nx">it</span><span class="p">(</span><span class="s2">&quot;should know if an element is to the right of&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC274'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="s2">&quot;.left-right-correct .right&quot;</span><span class="p">)).</span><span class="nx">should</span><span class="p">(</span><span class="nx">beToTheRightOf</span><span class="p">,</span> <span class="s2">&quot;.left-right-correct .left&quot;</span><span class="p">);</span></div><div class='line' id='LC275'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="s2">&quot;.left-right-correct .text-2&quot;</span><span class="p">)).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">beToTheRightOf</span><span class="p">,</span> <span class="s2">&quot;.left-right-correct .text-1&quot;</span><span class="p">);</span></div><div class='line' id='LC276'><br/></div><div class='line' id='LC277'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="s2">&quot;.left-right-correct .left&quot;</span><span class="p">)).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">beToTheRightOf</span><span class="p">,</span> <span class="s2">&quot;.left-right-correct .right&quot;</span><span class="p">);</span></div><div class='line' id='LC278'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="s2">&quot;.left-right-broken .right&quot;</span><span class="p">)).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">beToTheRightOf</span><span class="p">,</span> <span class="s2">&quot;.left-right-broken .left&quot;</span><span class="p">);</span></div><div class='line' id='LC279'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC280'><br/></div><div class='line' id='LC281'>&nbsp;&nbsp;<span class="nx">it</span><span class="p">(</span><span class="s2">&quot;should know if an element is to the above&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC282'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="s2">&quot;.left-right-broken .left&quot;</span><span class="p">)).</span><span class="nx">should</span><span class="p">(</span><span class="nx">beAbove</span><span class="p">,</span> <span class="s2">&quot;.left-right-broken .right&quot;</span><span class="p">);</span></div><div class='line' id='LC283'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="s2">&quot;.left-right-correct .text-2&quot;</span><span class="p">)).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">beAbove</span><span class="p">,</span> <span class="s2">&quot;.left-right-correct .text-1&quot;</span><span class="p">);</span></div><div class='line' id='LC284'><br/></div><div class='line' id='LC285'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="s2">&quot;.left-right-correct .left&quot;</span><span class="p">)).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">beAbove</span><span class="p">,</span> <span class="s2">&quot;.left-right-correct .right&quot;</span><span class="p">);</span></div><div class='line' id='LC286'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="s2">&quot;.left-right-correct .right&quot;</span><span class="p">)).</span><span class="nx">shouldNot</span><span class="p">(</span><span class="nx">beAbove</span><span class="p">,</span> <span class="s2">&quot;.left-right-correct .left&quot;</span><span class="p">);</span></div><div class='line' id='LC287'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC288'><span class="p">});</span></div><div class='line' id='LC289'><br/></div></pre></div>
              
            
          </td>
        </tr>
      </table>
    
  </div>


          </div>
        </div>
      </div>
    </div>
  

  </div>


<div class="frame frame-loading" style="display:none;">
  <img src="/images/modules/ajax/big_spinner_336699.gif">
</div>

    </div>
  
      
    </div>

    <div id="footer" class="clearfix">
      <div class="site">
        <div class="sponsor">
          <a href="http://www.rackspace.com" class="logo">
            <img alt="Dedicated Server" src="https://assets3.github.com/images/modules/footer/rackspace_logo.png?v2?08ddb47aa6d530220f0e3a8bcd3e5e427bc2ef2a" />
          </a>
          Powered by the <a href="http://www.rackspace.com ">Dedicated
          Servers</a> and<br/> <a href="http://www.rackspacecloud.com">Cloud
          Computing</a> of Rackspace Hosting<span>&reg;</span>
        </div>

        <ul class="links">
          <li class="blog"><a href="https://github.com/blog">Blog</a></li>
          <li><a href="http://support.github.com">Support</a></li>
          <li><a href="https://github.com/training">Training</a></li>
          <li><a href="http://jobs.github.com">Job Board</a></li>
          <li><a href="http://shop.github.com">Shop</a></li>
          <li><a href="https://github.com/contact">Contact</a></li>
          <li><a href="http://develop.github.com">API</a></li>
          <li><a href="http://status.github.com">Status</a></li>
        </ul>
        <ul class="sosueme">
          <li class="main">&copy; 2011 <span id="_rrt" title="0.33223s from fe6.rs.github.com">GitHub</span> Inc. All rights reserved.</li>
          <li><a href="/site/terms">Terms of Service</a></li>
          <li><a href="/site/privacy">Privacy</a></li>
          <li><a href="https://github.com/security">Security</a></li>
        </ul>
      </div>
    </div><!-- /#footer -->

    
      
      
        <!-- current locale:  -->
        <div class="locales">
          <div class="site">

            <ul class="choices clearfix limited-locales">
              <li><span class="current">English</span></li>
              
                  <li><a rel="nofollow" href="?locale=de">Deutsch</a></li>
              
                  <li><a rel="nofollow" href="?locale=fr">Français</a></li>
              
                  <li><a rel="nofollow" href="?locale=ja">日本語</a></li>
              
                  <li><a rel="nofollow" href="?locale=pt-BR">Português (BR)</a></li>
              
                  <li><a rel="nofollow" href="?locale=ru">Русский</a></li>
              
                  <li><a rel="nofollow" href="?locale=zh">中文</a></li>
              
              <li class="all"><a href="#" class="minibutton btn-forward js-all-locales"><span><span class="icon"></span>See all available languages</span></a></li>
            </ul>

            <div class="all-locales clearfix">
              <h3>Your current locale selection: <strong>English</strong>. Choose another?</h3>
              
              
                <ul class="choices">
                  
                      <li><a rel="nofollow" href="?locale=en">English</a></li>
                  
                      <li><a rel="nofollow" href="?locale=af">Afrikaans</a></li>
                  
                      <li><a rel="nofollow" href="?locale=ca">Català</a></li>
                  
                      <li><a rel="nofollow" href="?locale=cs">Čeština</a></li>
                  
                </ul>
              
                <ul class="choices">
                  
                      <li><a rel="nofollow" href="?locale=de">Deutsch</a></li>
                  
                      <li><a rel="nofollow" href="?locale=es">Español</a></li>
                  
                      <li><a rel="nofollow" href="?locale=fr">Français</a></li>
                  
                      <li><a rel="nofollow" href="?locale=hr">Hrvatski</a></li>
                  
                </ul>
              
                <ul class="choices">
                  
                      <li><a rel="nofollow" href="?locale=id">Indonesia</a></li>
                  
                      <li><a rel="nofollow" href="?locale=it">Italiano</a></li>
                  
                      <li><a rel="nofollow" href="?locale=ja">日本語</a></li>
                  
                      <li><a rel="nofollow" href="?locale=nl">Nederlands</a></li>
                  
                </ul>
              
                <ul class="choices">
                  
                      <li><a rel="nofollow" href="?locale=no">Norsk</a></li>
                  
                      <li><a rel="nofollow" href="?locale=pl">Polski</a></li>
                  
                      <li><a rel="nofollow" href="?locale=pt-BR">Português (BR)</a></li>
                  
                      <li><a rel="nofollow" href="?locale=ru">Русский</a></li>
                  
                </ul>
              
                <ul class="choices">
                  
                      <li><a rel="nofollow" href="?locale=sr">Српски</a></li>
                  
                      <li><a rel="nofollow" href="?locale=sv">Svenska</a></li>
                  
                      <li><a rel="nofollow" href="?locale=zh">中文</a></li>
                  
                </ul>
              
            </div>

          </div>
          <div class="fade"></div>
        </div>
      
    

    <script>window._auth_token = "719b06bef757242b03a0a6cc94f41b824685e877"</script>
    

<div id="keyboard_shortcuts_pane" style="display:none">
  <h2>Keyboard Shortcuts <small><a href="#" class="js-see-all-keyboard-shortcuts">(see all)</a></small></h2>

  <div class="columns threecols">
    <div class="column first">
      <h3>Site wide shortcuts</h3>
      <dl class="keyboard-mappings">
        <dt>s</dt>
        <dd>Focus site search</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>?</dt>
        <dd>Bring up this help dialog</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column middle" style='display:none'>
      <h3>Commit list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selected down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selected up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>t</dt>
        <dd>Open tree</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>p</dt>
        <dd>Open parent</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>c <em>or</em> o <em>or</em> enter</dt>
        <dd>Open commit</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column last" style='display:none'>
      <h3>Pull request list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selected down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selected up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>o <em>or</em> enter</dt>
        <dd>Open issue</dd>
      </dl>
    </div><!-- /.columns.last -->

  </div><!-- /.columns.equacols -->

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Issues</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selected down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selected up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>x</dt>
          <dd>Toggle select target</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column middle">
        <dl class="keyboard-mappings">
          <dt>I</dt>
          <dd>Mark selected as read</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>U</dt>
          <dd>Mark selected as unread</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>e</dt>
          <dd>Close selected</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Remove selected from view</dd>
        </dl>
      </div><!-- /.column.middle -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>c</dt>
          <dd>Create issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Create label</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>i</dt>
          <dd>Back to inbox</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>u</dt>
          <dd>Back to issues</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>/</dt>
          <dd>Focus issues search</dd>
        </dl>
      </div>
    </div>
  </div>

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Network Graph</h3>
    <div class="columns equacols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt><span class="badmono">←</span> <em>or</em> h</dt>
          <dd>Scroll left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">→</span> <em>or</em> l</dt>
          <dd>Scroll right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↑</span> <em>or</em> k</dt>
          <dd>Scroll up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↓</span> <em>or</em> j</dt>
          <dd>Scroll down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Toggle visibility of head labels</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">←</span> <em>or</em> shift h</dt>
          <dd>Scroll all the way left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">→</span> <em>or</em> shift l</dt>
          <dd>Scroll all the way right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↑</span> <em>or</em> shift k</dt>
          <dd>Scroll all the way up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↓</span> <em>or</em> shift j</dt>
          <dd>Scroll all the way down</dd>
        </dl>
      </div><!-- /.column.last -->
    </div>
  </div>

  <div >
    <div class="rule"></div>

    <h3>Source Code Browsing</h3>
    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Activates the file finder</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Jump to line</dd>
        </dl>
      </div>
    </div>
  </div>

</div>
    

    <!--[if IE 8]>
    <script type="text/javascript" charset="utf-8">
      $(document.body).addClass("ie8")
    </script>
    <![endif]-->

    <!--[if IE 7]>
    <script type="text/javascript" charset="utf-8">
      $(document.body).addClass("ie7")
    </script>
    <![endif]-->

    
    <script type='text/javascript'></script>
    
  </body>
</html>

