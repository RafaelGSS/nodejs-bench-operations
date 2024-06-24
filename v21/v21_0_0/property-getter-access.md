## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|16,673,393|8336697|
|Getter|13,861,099|6930704|
|Method|16,374,485|8187243|
|DefineProperty (getter)|16,411,559|8205780|
|DefineProperty (getter & enumerable=false)|13,866,980|6933491|
|DefineProperty (getter & configurable=false)|16,601,989|8300995|
|DefineProperty (getter & enumerable=false & configurable=false)|13,202,237|6601119|
|DefineProperty (writable)|16,555,865|8277933|
|DefineProperty (writable & enumerable=false)|16,445,742|8222872|
|DefineProperty (writable & enumerable=false & configurable=false)|16,645,626|8322814|
|DefineProperties (getter)|13,965,957|6982979|
|DefineProperties (getter & enumerable=false)|14,140,997|7070499|
|DefineProperties (getter & enumerable=false & configurable=false)|13,945,186|6972594|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:38:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":16673393.131657049,"samples":8336697},{"name":"Getter","opsSec":13861099.783619588,"samples":6930704},{"name":"Method","opsSec":16374485.06902242,"samples":8187243},{"name":"DefineProperty (getter)","opsSec":16411559.441475417,"samples":8205780},{"name":"DefineProperty (getter & enumerable=false)","opsSec":13866980.864519697,"samples":6933491},{"name":"DefineProperty (getter & configurable=false)","opsSec":16601989.4948009,"samples":8300995},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":13202237.553548874,"samples":6601119},{"name":"DefineProperty (writable)","opsSec":16555865.764584975,"samples":8277933},{"name":"DefineProperty (writable & enumerable=false)","opsSec":16445742.27599828,"samples":8222872},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":16645626.288405774,"samples":8322814},{"name":"DefineProperties (getter)","opsSec":13965957.375334878,"samples":6982979},{"name":"DefineProperties (getter & enumerable=false)","opsSec":14140997.137744898,"samples":7070499},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":13945186.970275655,"samples":6972594}]}-->
