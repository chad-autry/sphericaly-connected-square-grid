# sphericaly-wrapped-square-grid
Demo page of wrapping sprites on a 2D map spherically
The purpose of this mapping would be for cell based games such as a Rougelike or RPG

## 2D Array Indexes to sphere
Picture a globe with latitude lines (the ones that all intersect at the poles) And Longitude lines (the ones that are stacked on top of each other in parallel) reference picture
Now, let the intersection of the longitude and latitude lines be the locations of squares on your grid. If you notice, you'll have a fully filled 2d array (one coordinate of the array is latitude, the other is longitude).

## Character Translation on Small Screen
If we make the map small enough to fit on a single screen, and Up/Down/Left/Right map to North/South/West/East; Then when traveling East/West you'd simply reappear on the opposite side of the screen. If we traveled across the edge of the screen to the North or South, we'd reappear on the same longitude line (we'd still be at the top or bottom of the screen), shifted half the screen away to a different latitude line.

## Straight Line Up and Down
If you wanted to make "up" be a straight line direction and not just warp back and forth like the compas direction would, you could flip the map north to south along with the character's shift. Bonus points if you flipped all the tile sprites =P If drawing only a segment of a larger map, this shift still happens. The array indices of the tiles flip whether they are increasing/decreasing in the screen up direction at the poles. Again, bonus points if the sprites were flipped when crossing over a pole.

## Mapping to a Sphere
If you wanted to map to a sphere so it could actually be painted in 3d, you could have a higher density of latitude lines at the equator, so there is a bit more even coverage. Else the squares at the poles represent a smaller area than the squares at the equator.

## Further Thoughts
Distances between squares is not euclidean, but could be figured out. It should be good enough though.
I'll leave it as an exercise from someone else to actually map this type of layout onto a sphere.