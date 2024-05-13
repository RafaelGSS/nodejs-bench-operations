## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|15,723,780|7861891|
|(short string) (true) String#slice and strict comparison|15,934,876|7967439|
|(long string) (true) String#startsWith|14,820,015|7410008|
|(long string) (true) String#slice and strict comparison|15,965,733|7982867|
|(short string) (false) String#startsWith|15,906,738|7953370|
|(short string) (false) String#slice and strict comparison|16,084,382|8042192|
|(long string) (false) String#startsWith|15,580,042|7790022|
|(long string) (false) String#slice and strict comparison|16,082,983|8041492|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:58:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":15723780.710649587,"samples":7861891},{"name":"(short string) (true) String#slice and strict comparison","opsSec":15934876.183483962,"samples":7967439},{"name":"(long string) (true) String#startsWith","opsSec":14820015.288664365,"samples":7410008},{"name":"(long string) (true) String#slice and strict comparison","opsSec":15965733.233607547,"samples":7982867},{"name":"(short string) (false) String#startsWith","opsSec":15906738.69575601,"samples":7953370},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16084382.552336736,"samples":8042192},{"name":"(long string) (false) String#startsWith","opsSec":15580042.84707576,"samples":7790022},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16082983.967651822,"samples":8041492}]}-->
