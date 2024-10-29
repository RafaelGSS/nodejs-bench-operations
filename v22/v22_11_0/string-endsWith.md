## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|127,013,371|63507868|
|(short string) (true) String#slice and strict comparison|60,501,133|30271089|
|(long string) (true) String#endsWith|63,560,780|31781503|
|(long string) (true) String#slice and strict comparison|54,806,425|27404139|
|(short string) (false) String#endsWith|93,573,670|46786860|
|(short string) (false) String#slice and strict comparison|60,519,280|30262717|
|(long string) (false) String#endsWith|86,030,991|43016540|
|(long string) (false) String#slice and strict comparison|54,686,011|27343014|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:48:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":127013371.51907581,"samples":63507868},{"name":"(short string) (true) String#slice and strict comparison","opsSec":60501133.063311726,"samples":30271089},{"name":"(long string) (true) String#endsWith","opsSec":63560780.86418351,"samples":31781503},{"name":"(long string) (true) String#slice and strict comparison","opsSec":54806425.762034945,"samples":27404139},{"name":"(short string) (false) String#endsWith","opsSec":93573670.96739641,"samples":46786860},{"name":"(short string) (false) String#slice and strict comparison","opsSec":60519280.399568975,"samples":30262717},{"name":"(long string) (false) String#endsWith","opsSec":86030991.85576567,"samples":43016540},{"name":"(long string) (false) String#slice and strict comparison","opsSec":54686011.15670857,"samples":27343014}]}-->
