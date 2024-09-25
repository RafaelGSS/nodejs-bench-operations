## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|14,448,676|7224339|
|(short string) (true) String#slice and strict comparison|14,501,133|7250567|
|(long string) (true) String#endsWith|14,456,055|7228028|
|(long string) (true) String#slice and strict comparison|14,018,797|7009399|
|(short string) (false) String#endsWith|15,132,222|7566112|
|(short string) (false) String#slice and strict comparison|14,568,252|7284127|
|(long string) (false) String#endsWith|14,880,247|7440124|
|(long string) (false) String#slice and strict comparison|13,749,454|6874728|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:39:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":14448676.988647146,"samples":7224339},{"name":"(short string) (true) String#slice and strict comparison","opsSec":14501133.825980216,"samples":7250567},{"name":"(long string) (true) String#endsWith","opsSec":14456055.190683832,"samples":7228028},{"name":"(long string) (true) String#slice and strict comparison","opsSec":14018797.860238742,"samples":7009399},{"name":"(short string) (false) String#endsWith","opsSec":15132222.940953227,"samples":7566112},{"name":"(short string) (false) String#slice and strict comparison","opsSec":14568252.659804886,"samples":7284127},{"name":"(long string) (false) String#endsWith","opsSec":14880247.255783843,"samples":7440124},{"name":"(long string) (false) String#slice and strict comparison","opsSec":13749454.405153586,"samples":6874728}]}-->
