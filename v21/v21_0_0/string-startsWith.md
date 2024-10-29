## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|112,031,811|56015965|
|(short string) (true) String#slice and strict comparison|59,179,482|29611859|
|(long string) (true) String#startsWith|63,082,978|31541494|
|(long string) (true) String#slice and strict comparison|52,280,956|26141696|
|(short string) (false) String#startsWith|97,999,772|49058391|
|(short string) (false) String#slice and strict comparison|58,819,553|29420785|
|(long string) (false) String#startsWith|85,372,033|42951892|
|(long string) (false) String#slice and strict comparison|52,955,689|26480751|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:59:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":112031811.91847025,"samples":56015965},{"name":"(short string) (true) String#slice and strict comparison","opsSec":59179482.75694677,"samples":29611859},{"name":"(long string) (true) String#startsWith","opsSec":63082978.78988509,"samples":31541494},{"name":"(long string) (true) String#slice and strict comparison","opsSec":52280956.439363316,"samples":26141696},{"name":"(short string) (false) String#startsWith","opsSec":97999772.0361847,"samples":49058391},{"name":"(short string) (false) String#slice and strict comparison","opsSec":58819553.017831676,"samples":29420785},{"name":"(long string) (false) String#startsWith","opsSec":85372033.19289374,"samples":42951892},{"name":"(long string) (false) String#slice and strict comparison","opsSec":52955689.159912296,"samples":26480751}]}-->
