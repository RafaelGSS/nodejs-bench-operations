## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|14,752,968|7376485|
|Setter|5,907,242|2953622|
|Method|13,000,115|6500058|
|DefineProperty (setter)|14,020,970|7010486|
|DefineProperty (setter & enumerable=false)|6,003,468|3001735|
|DefineProperty (setter & configurable=false)|5,897,719|2948860|
|DefineProperty (setter & enumerable=false & configurable=false)|5,926,699|2963350|
|DefineProperty (writable)|14,935,287|7467644|
|DefineProperty (writable & enumerable=false)|14,723,291|7361646|
|DefineProperty (writable & enumerable=false & configurable=false)|13,925,424|6962713|
|DefineProperties (setter)|14,005,609|7002805|
|DefineProperties (setter & enumerable=false)|5,834,089|2917045|
|DefineProperties (setter & enumerable=false & configurable=false)|5,938,253|2969128|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:54:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Setter (class)","opsSec":14752968.908150908,"samples":7376485},{"name":"Setter","opsSec":5907242.381509339,"samples":2953622},{"name":"Method","opsSec":13000115.714277906,"samples":6500058},{"name":"DefineProperty (setter)","opsSec":14020970.541607602,"samples":7010486},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6003468.775327249,"samples":3001735},{"name":"DefineProperty (setter & configurable=false)","opsSec":5897719.823122672,"samples":2948860},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5926699.466619895,"samples":2963350},{"name":"DefineProperty (writable)","opsSec":14935287.133740664,"samples":7467644},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14723291.49941949,"samples":7361646},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":13925424.440013928,"samples":6962713},{"name":"DefineProperties (setter)","opsSec":14005609.019948008,"samples":7002805},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5834089.778359782,"samples":2917045},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5938253.850619345,"samples":2969128}]}-->
