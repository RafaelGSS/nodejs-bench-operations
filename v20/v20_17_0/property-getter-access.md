## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|19,060,419|9530211|
|Getter|14,945,346|7472674|
|Method|17,328,215|8664108|
|DefineProperty (getter)|17,059,837|8529919|
|DefineProperty (getter & enumerable=false)|14,730,307|7365154|
|DefineProperty (getter & configurable=false)|16,754,877|8377439|
|DefineProperty (getter & enumerable=false & configurable=false)|14,384,057|7192029|
|DefineProperty (writable)|19,073,750|9536876|
|DefineProperty (writable & enumerable=false)|19,255,748|9627875|
|DefineProperty (writable & enumerable=false & configurable=false)|17,668,776|8834389|
|DefineProperties (getter)|15,010,941|7505471|
|DefineProperties (getter & enumerable=false)|15,064,503|7532252|
|DefineProperties (getter & enumerable=false & configurable=false)|14,814,094|7407295|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:25:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Getter (class)","opsSec":19060419.979151845,"samples":9530211},{"name":"Getter","opsSec":14945346.894136602,"samples":7472674},{"name":"Method","opsSec":17328215.827100057,"samples":8664108},{"name":"DefineProperty (getter)","opsSec":17059837.351597615,"samples":8529919},{"name":"DefineProperty (getter & enumerable=false)","opsSec":14730307.940769006,"samples":7365154},{"name":"DefineProperty (getter & configurable=false)","opsSec":16754877.128425233,"samples":8377439},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":14384057.539761912,"samples":7192029},{"name":"DefineProperty (writable)","opsSec":19073750.62431691,"samples":9536876},{"name":"DefineProperty (writable & enumerable=false)","opsSec":19255748.498210546,"samples":9627875},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":17668776.55173654,"samples":8834389},{"name":"DefineProperties (getter)","opsSec":15010941.248888459,"samples":7505471},{"name":"DefineProperties (getter & enumerable=false)","opsSec":15064503.727889847,"samples":7532252},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":14814094.113635842,"samples":7407295}]}-->
