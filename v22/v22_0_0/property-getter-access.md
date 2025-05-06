## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|95,749,610|47874819|
|Getter|50,381,218|25195624|
|Method|96,667,041|48333540|
|DefineProperty (getter)|93,891,148|46951465|
|DefineProperty (getter & enumerable=false)|50,388,047|25199156|
|DefineProperty (getter & configurable=false)|94,316,123|47158254|
|DefineProperty (getter & enumerable=false & configurable=false)|49,642,880|24821488|
|DefineProperty (writable)|96,281,847|48141567|
|DefineProperty (writable & enumerable=false)|95,858,146|47929104|
|DefineProperty (writable & enumerable=false & configurable=false)|95,880,397|47967856|
|DefineProperties (getter)|49,924,129|24966347|
|DefineProperties (getter & enumerable=false)|50,249,555|25128928|
|DefineProperties (getter & enumerable=false & configurable=false)|49,586,867|24793478|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:28:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Getter (class)","samples":47874819,"opsSec":95749610.61561137},{"name":"Getter","samples":25195624,"opsSec":50381218.91303829},{"name":"Method","samples":48333540,"opsSec":96667041.33318347},{"name":"DefineProperty (getter)","samples":46951465,"opsSec":93891148.35092263},{"name":"DefineProperty (getter & enumerable=false)","samples":25199156,"opsSec":50388047.7531205},{"name":"DefineProperty (getter & configurable=false)","samples":47158254,"opsSec":94316123.94474329},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":24821488,"opsSec":49642880.884240225},{"name":"DefineProperty (writable)","samples":48141567,"opsSec":96281847.48195395},{"name":"DefineProperty (writable & enumerable=false)","samples":47929104,"opsSec":95858146.45906997},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":47967856,"opsSec":95880397.06484693},{"name":"DefineProperties (getter)","samples":24966347,"opsSec":49924129.01642594},{"name":"DefineProperties (getter & enumerable=false)","samples":25128928,"opsSec":50249555.37644648},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":24793478,"opsSec":49586867.63620187}]}-->
