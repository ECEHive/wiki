---
title: Oscilloscope Guide
prev: 
    link: /explore/electronics-benchtop/
    label: Electronics Benchtop
---

This document provides an overview of how to use many common features of the Interdisciplinary Design Commons (IDC) oscilloscopes. 

The IDC contains 20 Keysight InfiniiVison oscilloscopes from the 3000 X, 4000 X, and 6000 X series, which vary mainly in bandwidth and sample rate. The basics of probing, triggering, and measuring values with these scopes will be covered here. This document has two primary parts, an overview of basic probing and measurement, and an overview of the more advanced features of the IDC’s oscilloscopes.

### Why Should I Use an Oscilloscope?

Oscilloscopes are useful laboratory instruments that measure and display instantaneous voltage of an electrical component as a function of time. Scopes are great tools to use when dealing with any signal with varying voltage, as opposed to a multimeter, which is better suited for measuring constant DC or AC values. In addition to analog channels, some of the IDC’s oscilloscopes also have mixed signal capabilities, meaning they also have digital channels which can be displayed concurrently with the analog channels.

## Basic Methods

### Probes

Oscilloscope probes are located in the second drawer at every workstation equipped with an oscilloscope. Ask a PI at the equipment library for a key to unlock the drawer. Probes plug into the channel plugs at the bottom of the oscilloscope. The probes have two parts: the actual probe, and a ground clip. Connect the probe to the signal you want to view and connect the ground clip to ground.

### Viewing your Signal

After getting your probe hooked up, press the channel button (located below the large knobs labeled "Vertical") to turn the channel on. A colored line will appear; however, it probably does not look incredibly useful yet. To get it looking better, press the "Auto Scale" button at the top right of the oscilloscope. Pressing this button will cause the scope to change the scaling to what it predicts you will want.
From here, use the following knobs to adjust:
  * The large "Horizontal" knob (top left) for horizontal scaling
  * The small "Horizontal" knob for horizontal shifting
  * The large "Vertical" knob (by the channel number) for vertical scaling
  * The small "Vertical" knob for vertical shifting
If you are probing multiple signals, you can display them all at the same time. Note that vertical scaling and shifting is different for all signals, but since the X axis is time, there is only one set of horizontal controls that controls scaling for all displayed channels.

### Triggering
The trigger settings determine what part of the waveform the oscilloscope displays. The default setting is rising edge triggered, but other triggers can be set by pressing the "Trigger" button. This brings up the trigger menu, where a different edge type can be chosen (falling, alternating, either), or a different trigger type can be chosen ("edge then edge", a specific rise/fall time). Some of these triggers, such as "edge then edge", can be applied across multiple waveforms.

It is important to note that if the oscilloscope is acquiring, it will display all sections of the waveform that satisfy the trigger specifications. This means that if a sine wave is being probed and the trigger is set to "either edge," sections of the sine wave at either edge will be shown simultaneously. When the "Stop" button is pressed to stop acquiring, the screen will only display the waveform at one of the triggers.


### Measuring
#### Built-in Measurements
To begin measuring various aspects of the signal using built-in automated measurements such as frequency and peak-to-peak voltage, press the "Meas" button in the "Measure" section. This will bring up the measurements menu on the right side of the screen. To add a new measurement, simply press the plus button and then select the desired measurement.

#### Cursors
For manual control of measurements, press the "Cursors" button in the "Measure" section. This will turn on two horizontal and two vertical cursors, which appear as dotted lines across the screen. Push the cursors knob to select a cursor, and then turn the knob to move the cursor where you want it. The right side of the screen will display the cursor values as well as a few other useful values such as ΔX and 1/ΔX.

#### Math
The math function performs a desired operation on one or more input signals and displays the result on screen. Math waveforms are activated by pressing the "Math" button on the right side of the scope. From here, use the menu at the bottom to select an operation, use the other options to adjust settings, and set the waveform to display.


### Screen Captures
In order to save an image of the signal (along with cursors and measurement values), first press the "Save/Recall" button in the "File" section. Use the menu at the bottom of the screen to first select "Save," then select .png as the file type and name the file. Insert a flash drive into the usb port at the bottom of the oscilloscope, and choose /usb as the save location. Now press "Save" to save the file.

## Advanced Methods

### Probe Compensation
Oscilloscope probes must be calibrated to work with an individual oscilloscope. This act is called probe compensation. To determine if a probe needs to be adjusted, connect the probe to the vertical hook labeled "Probe Comp" and the ground clip to the horizontal hook next to it. This outputs a 50% duty cycle square wave. If this waveform appears with peaks or rounded edges, the probe needs to be compensated. Use the non-metallic screwdriver device found in the second drawer to tune the screw at the end of the probe that plugs into the oscilloscope until the waveform looks normal.

### Advanced Viewing

The Hive’s oscilloscopes have many advanced features for navigating through a captured waveform:
  * **Search.** Pressing the "Search" button will bring up the search menu. From here, you can search for any event that can be triggered on. A list of found events will appear on the right side of the screen, and a triangle will appear at the top of the screen marking each event.
  * **Navigate.** The navigation buttons (the two triangles and square beside the "Navigate" button) can be used to navigate through a captured waveform. By default they will scroll left or right along the time axis. The navigation settings menu can be accessed by pressing the "Navigate" button. From here, the navigation buttons can be changed to navigate between events found using the search function instead.
  * **Magnify.** Pressing the magnifying glass button will split the screen into a top and a bottom screen, with the bottom screen showing a zoomed in view of a highlighted section of the top screen. Using the horizontal knobs will change the scaling and location of the zoomed in view of the signal.

### Digital Signals

The oscilloscopes on the half of the room opposite the front desk (stations 17+) are mixed signal oscilloscopes. These oscilloscopes have the ability to analyze 16 digital channels like digital logic analyzers. In the drawers at these stations there are digital probes as well as the regular oscilloscope probes. The digital probes plug into the long rectangular digital plugins found on the back of most oscilloscopes (the 3000 X series has this plug in the front). Each probe connects to both the signal to be measured as well as ground.

Once the probes are connected, pressing the "Digital" button will activate digital channels. Triggering on digital channels works through the same menu as analog. Like analog, digital signals can be set to trigger on rising or falling edge. Pattern triggering can also be used to trigger on a specific pattern of values in a particular channel.

## Resources

Good on you for seeking even more knowledge! As a reward, enjoy this interesting piece of trivia: the 6000 X series has voice control capabilities. (You can use this to convince your friends you are telekinetic!)
Keysight InfiniiVision [3000 X](https://literature.cdn.keysight.com/litweb/pdf/75019-97088.pdf?id=2014466), [4000 X](https://literature.cdn.keysight.com/litweb/pdf/54709-97072.pdf?id=2265134), and [6000 X](https://literature.cdn.keysight.com/litweb/pdf/54609-97035.pdf?id=2462019) series official user’s guides contain in-depth looks at the above topics and more.
[Keysight’s YouTube channel](https://www.youtube.com/user/KeysightOscilloscope) contains many videos about the usage and features of their oscilloscopes.
Keysight’s [2-Minute Guru](https://www.youtube.com/playlist?list=PLzHyxysSubUkc5nurngzgkd2ZxJsHdJAb) and [Scopes University](https://www.youtube.com/playlist?list=PLzHyxysSubUnQnk5Sd6twoQ_HHaf2EWnf) YouTube series provide basic and advanced oscilloscope tutorials in a visual format.


