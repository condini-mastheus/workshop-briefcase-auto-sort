# Briefcase Auto Sort

This workshop project explores the algorithmic challenges of designing an auto-sort system for a briefcase-style inventory, inspired by grid-based inventories commonly found in games.

The problem focuses on space optimization under strict constraints, where items arrive one-by-one and must be placed intelligently to avoid fragmentation and wasted space.

![Briefcase Auto Sort](https://asset.vg247.com/RE4-NG%2B-Inventory-2.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/RE4-NG%2B-Inventory-2.jpg)

## Problem Overview

The inventory is represented as a fixed-size 2D grid, where:

- Each cell represents a unit of space
- Items occupy rectangular regions of the grid
- Empty slots are represented as 0
- Occupied slots are represented as 1

### Constraints

- Grid-aligned only: all placements use integer coordinates
- No rotation: items cannot swap width and height
- Online problem: items arrive one-by-one, with no knowledge of future items
- Item size limits:
  - Maximum width: 4 columns
  - Maximum height: 3 rows

**Primary objective: Minimize fragmentation while maximizing the chance that future items can still fit**

*Repacking is allowed only to rearrange existing items in order to fit a new one*

### Example

For example, imagine we have a 3x3 inventory. Consider 0 a empty slot and 1 as already used slot:

```
// inventory
0, 0, 0
0, 0, 0
0, 0, 0
```

Supose we pickuped 2 itens, one is 2x1 and other 1x1. We end up with something like this

```
// inventory
1, 1, 0
1, 0, 0
0, 0, 0
```

Now we pickuped another item with 2x3 dimentions, but we can't add to our inventory because it won't fit.

```
// inventory
1, 1, 0
1, 0, 0
0, 0, 0
```

### Goal

The goal of this tool is to determine whether the current inventory can be rearranged to:

- Reduce fragmentation
- Preserve large, contiguous empty regions
- Allow the new item to fit without violating constraints

For example, a valid rearrangement could be:

```
// inventory
1, 1, 1
0, 0, 0
0, 0, 0
```

This rearrangement creates a contiguous empty region large enough to fit the 2×3 item.

## Workshop Instructions

1. Check out the `start-here` branch.

2. __todo be done__

## Acknowledgments

The inspiration for this workshop came from a game from my adolescence that was recently remade. In the first version, the development team didn't include the automatic sorting algorithm, but in the new version, they did, and that made me curious to understand how it works.

## License

All code and documentation are (c) 2023 Matheus Condini and released under the [MIT License](http://getify.mit-license.org/). A copy of the MIT License [is also included](LICENSE.txt).
