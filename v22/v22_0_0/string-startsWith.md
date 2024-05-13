## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|15,712,032|7856017|
|(short string) (true) String#slice and strict comparison|14,735,224|7367613|
|(long string) (true) String#startsWith|13,732,627|6866315|
|(long string) (true) String#slice and strict comparison|15,163,498|7581750|
|(short string) (false) String#startsWith|14,987,933|7493967|
|(short string) (false) String#slice and strict comparison|15,251,660|7625831|
|(long string) (false) String#startsWith|15,552,531|7776266|
|(long string) (false) String#slice and strict comparison|16,071,017|8035509|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:44:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":15712032.680186635,"samples":7856017},{"name":"(short string) (true) String#slice and strict comparison","opsSec":14735224.968521226,"samples":7367613},{"name":"(long string) (true) String#startsWith","opsSec":13732627.830271095,"samples":6866315},{"name":"(long string) (true) String#slice and strict comparison","opsSec":15163498.423056751,"samples":7581750},{"name":"(short string) (false) String#startsWith","opsSec":14987933.940144973,"samples":7493967},{"name":"(short string) (false) String#slice and strict comparison","opsSec":15251660.322393922,"samples":7625831},{"name":"(long string) (false) String#startsWith","opsSec":15552531.222382,"samples":7776266},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16071017.132135782,"samples":8035509}]}-->
