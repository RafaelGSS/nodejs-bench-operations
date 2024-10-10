## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|112,081,886|56040954|
|(short string) (true) String#slice and strict comparison|61,017,678|30510746|
|(long string) (true) String#startsWith|63,874,477|31957551|
|(long string) (true) String#slice and strict comparison|56,352,662|28176341|
|(short string) (false) String#startsWith|94,574,228|47288311|
|(short string) (false) String#slice and strict comparison|60,311,694|30162245|
|(long string) (false) String#startsWith|84,254,601|42127307|
|(long string) (false) String#slice and strict comparison|55,481,668|27740841|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:50:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":112081886.92860526,"samples":56040954},{"name":"(short string) (true) String#slice and strict comparison","opsSec":61017678.51712804,"samples":30510746},{"name":"(long string) (true) String#startsWith","opsSec":63874477.83209878,"samples":31957551},{"name":"(long string) (true) String#slice and strict comparison","opsSec":56352662.84009464,"samples":28176341},{"name":"(short string) (false) String#startsWith","opsSec":94574228.51542474,"samples":47288311},{"name":"(short string) (false) String#slice and strict comparison","opsSec":60311694.63273689,"samples":30162245},{"name":"(long string) (false) String#startsWith","opsSec":84254601.69882815,"samples":42127307},{"name":"(long string) (false) String#slice and strict comparison","opsSec":55481668.79536283,"samples":27740841}]}-->
