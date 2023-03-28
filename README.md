# Briefcase Auto Sort

This workshop project explores the algorithmic complexities of creating briefcase auto sort algorithm.

![Briefcase Auto Sort](https://asset.vg247.com/RE4-NG%2B-Inventory-2.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/RE4-NG%2B-Inventory-2.jpg)

For example, imagine we have a 3x3 inventory. Consider 0 to empty and 1 to used slot:

```
// inventory
0, 0, 0
0, 0, 0
0, 0, 0
```

Supose we pickuped 2 itens, one is 2x1 and other 1x1. Supose we and up in this situation:

```
// inventory
1, 1, 0
1, 0, 0
0, 0, 0
```

Now we pickuped another item thats is 2x3. But we can't add to our inventory because it won't fit.

```
// inventory
1, 1, 0
1, 0, 0
0, 0, 0
```

The goal of this tool is to check if can rearrange our current inventory disposition of elements to save up space and fit as many itens we can.

```
// inventory
1, 1, 1
0, 0, 0
0, 0, 0
```


## Workshop Instructions

1. Check out the `start-here` branch.

2. __todo be done__

## Acknowledgments

This workshop inspiration came of a teenagerhood game that was recently remade and was included this feature - Resident Evil 4 Remake


## License

All code and documentation are (c) 2023 Matheus Condini and released under the [MIT License](http://getify.mit-license.org/). A copy of the MIT License [is also included](LICENSE.txt).
