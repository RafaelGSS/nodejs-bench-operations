## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|15,861,372|7930687|
|(short string) (true) String#slice and strict comparison|16,716,990|8358496|
|(long string) (true) String#startsWith|14,573,066|7286534|
|(long string) (true) String#slice and strict comparison|16,283,576|8141789|
|(short string) (false) String#startsWith|16,341,504|8170753|
|(short string) (false) String#slice and strict comparison|16,886,867|8443434|
|(long string) (false) String#startsWith|16,257,895|8128948|
|(long string) (false) String#slice and strict comparison|16,750,011|8375007|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:27:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":15861372.562974555,"samples":7930687},{"name":"(short string) (true) String#slice and strict comparison","opsSec":16716990.716623541,"samples":8358496},{"name":"(long string) (true) String#startsWith","opsSec":14573066.075132703,"samples":7286534},{"name":"(long string) (true) String#slice and strict comparison","opsSec":16283576.136492599,"samples":8141789},{"name":"(short string) (false) String#startsWith","opsSec":16341504.09090209,"samples":8170753},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16886867.35581713,"samples":8443434},{"name":"(long string) (false) String#startsWith","opsSec":16257895.054211047,"samples":8128948},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16750011.94733378,"samples":8375007}]}-->
