## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|13,515,540|6757771|
|Getter|12,059,907|6029954|
|Method|14,149,256|7074633|
|DefineProperty (getter)|13,394,082|6697042|
|DefineProperty (getter & enumerable=false)|12,147,344|6073673|
|DefineProperty (getter & configurable=false)|14,128,255|7064128|
|DefineProperty (getter & enumerable=false & configurable=false)|12,126,725|6063364|
|DefineProperty (writable)|13,553,112|6776557|
|DefineProperty (writable & enumerable=false)|14,137,526|7068764|
|DefineProperty (writable & enumerable=false & configurable=false)|13,786,088|6893045|
|DefineProperties (getter)|12,097,765|6048883|
|DefineProperties (getter & enumerable=false)|12,168,507|6084254|
|DefineProperties (getter & enumerable=false & configurable=false)|12,282,085|6141043|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:31:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Getter (class)","opsSec":13515540.29734167,"samples":6757771},{"name":"Getter","opsSec":12059907.975834372,"samples":6029954},{"name":"Method","opsSec":14149256.944197822,"samples":7074633},{"name":"DefineProperty (getter)","opsSec":13394082.499783704,"samples":6697042},{"name":"DefineProperty (getter & enumerable=false)","opsSec":12147344.760976426,"samples":6073673},{"name":"DefineProperty (getter & configurable=false)","opsSec":14128255.971666792,"samples":7064128},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":12126725.477840537,"samples":6063364},{"name":"DefineProperty (writable)","opsSec":13553112.129108397,"samples":6776557},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14137526.586252622,"samples":7068764},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":13786088.732006809,"samples":6893045},{"name":"DefineProperties (getter)","opsSec":12097765.105108544,"samples":6048883},{"name":"DefineProperties (getter & enumerable=false)","opsSec":12168507.318495361,"samples":6084254},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":12282085.87675891,"samples":6141043}]}-->
