## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|18,064,604|9032303|
|Setter|5,981,235|2990618|
|Method|18,012,163|9006082|
|DefineProperty (setter)|17,930,237|8965119|
|DefineProperty (setter & enumerable=false)|6,008,905|3004453|
|DefineProperty (setter & configurable=false)|6,026,543|3013272|
|DefineProperty (setter & enumerable=false & configurable=false)|5,919,098|2959550|
|DefineProperty (writable)|17,411,894|8705948|
|DefineProperty (writable & enumerable=false)|17,461,708|8730855|
|DefineProperty (writable & enumerable=false & configurable=false)|18,089,689|9044845|
|DefineProperties (setter)|17,246,797|8623399|
|DefineProperties (setter & enumerable=false)|5,998,554|2999278|
|DefineProperties (setter & enumerable=false & configurable=false)|6,017,823|3008912|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:44:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Setter (class)","opsSec":18064604.102726847,"samples":9032303},{"name":"Setter","opsSec":5981235.652670691,"samples":2990618},{"name":"Method","opsSec":18012163.59129062,"samples":9006082},{"name":"DefineProperty (setter)","opsSec":17930237.201728906,"samples":8965119},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6008905.419917259,"samples":3004453},{"name":"DefineProperty (setter & configurable=false)","opsSec":6026543.523777361,"samples":3013272},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5919098.279476607,"samples":2959550},{"name":"DefineProperty (writable)","opsSec":17411894.811684873,"samples":8705948},{"name":"DefineProperty (writable & enumerable=false)","opsSec":17461708.759172503,"samples":8730855},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":18089689.052775394,"samples":9044845},{"name":"DefineProperties (setter)","opsSec":17246797.056177404,"samples":8623399},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5998554.964626166,"samples":2999278},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6017823.385361881,"samples":3008912}]}-->
