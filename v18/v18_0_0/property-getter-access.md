## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|20,516,359|10258180|
|Getter|16,698,244|8349123|
|Method|20,845,353|10422677|
|DefineProperty (getter)|19,816,446|9908224|
|DefineProperty (getter & enumerable=false)|16,331,621|8165811|
|DefineProperty (getter & configurable=false)|20,411,005|10205503|
|DefineProperty (getter & enumerable=false & configurable=false)|16,182,171|8091086|
|DefineProperty (writable)|20,481,751|10240876|
|DefineProperty (writable & enumerable=false)|20,830,549|10415275|
|DefineProperty (writable & enumerable=false & configurable=false)|20,924,061|10462031|
|DefineProperties (getter)|15,856,914|7928458|
|DefineProperties (getter & enumerable=false)|16,253,055|8126528|
|DefineProperties (getter & enumerable=false & configurable=false)|16,439,225|8219613|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:50:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":20516359.2956267,"samples":10258180},{"name":"Getter","opsSec":16698244.972857665,"samples":8349123},{"name":"Method","opsSec":20845353.612346273,"samples":10422677},{"name":"DefineProperty (getter)","opsSec":19816446.24244547,"samples":9908224},{"name":"DefineProperty (getter & enumerable=false)","opsSec":16331621.633986369,"samples":8165811},{"name":"DefineProperty (getter & configurable=false)","opsSec":20411005.04619289,"samples":10205503},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":16182171.089481262,"samples":8091086},{"name":"DefineProperty (writable)","opsSec":20481751.326114256,"samples":10240876},{"name":"DefineProperty (writable & enumerable=false)","opsSec":20830549.076251477,"samples":10415275},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":20924061.97006789,"samples":10462031},{"name":"DefineProperties (getter)","opsSec":15856914.533133782,"samples":7928458},{"name":"DefineProperties (getter & enumerable=false)","opsSec":16253055.51949623,"samples":8126528},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":16439225.709963154,"samples":8219613}]}-->
