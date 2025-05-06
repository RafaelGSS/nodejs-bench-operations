## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|97,493,195|48746605|
|Getter|51,466,371|25733192|
|Method|102,151,571|51087741|
|DefineProperty (getter)|99,067,651|49533851|
|DefineProperty (getter & enumerable=false)|51,841,146|25921041|
|DefineProperty (getter & configurable=false)|96,342,243|48202462|
|DefineProperty (getter & enumerable=false & configurable=false)|50,468,995|25239842|
|DefineProperty (writable)|95,364,644|47683346|
|DefineProperty (writable & enumerable=false)|93,044,136|46522075|
|DefineProperty (writable & enumerable=false & configurable=false)|98,787,235|49404963|
|DefineProperties (getter)|51,114,346|25642434|
|DefineProperties (getter & enumerable=false)|51,638,096|25823678|
|DefineProperties (getter & enumerable=false & configurable=false)|51,808,264|25904139|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:28:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Getter (class)","samples":48746605,"opsSec":97493195.18103434},{"name":"Getter","samples":25733192,"opsSec":51466371.85393624},{"name":"Method","samples":51087741,"opsSec":102151571.38168667},{"name":"DefineProperty (getter)","samples":49533851,"opsSec":99067651.47549775},{"name":"DefineProperty (getter & enumerable=false)","samples":25921041,"opsSec":51841146.474670716},{"name":"DefineProperty (getter & configurable=false)","samples":48202462,"opsSec":96342243.92878442},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":25239842,"opsSec":50468995.77701234},{"name":"DefineProperty (writable)","samples":47683346,"opsSec":95364644.90253252},{"name":"DefineProperty (writable & enumerable=false)","samples":46522075,"opsSec":93044136.41555607},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":49404963,"opsSec":98787235.55986425},{"name":"DefineProperties (getter)","samples":25642434,"opsSec":51114346.654869005},{"name":"DefineProperties (getter & enumerable=false)","samples":25823678,"opsSec":51638096.050063916},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":25904139,"opsSec":51808264.01176872}]}-->
